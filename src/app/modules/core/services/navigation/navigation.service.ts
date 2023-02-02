import { Injectable, OnDestroy } from '@angular/core';
import { Location } from '@angular/common'
import { Router, NavigationEnd } from '@angular/router'
import { BehaviorSubject } from 'rxjs';
import { IUrl } from '../../interfaces/urlInterface';
import { ProjectService } from 'src/app/modules/api-rest/services/projects/project.service';
import { EpicService } from 'src/app/modules/api-rest/services/epics/epic.service';
import { StoriesService } from 'src/app/modules/api-rest/services/stories/stories.service';

@Injectable({
	providedIn: 'root'
})
export class NavigationService implements OnDestroy {

	private history: string[] = []
	private urlTemp: IUrl;
	public url: BehaviorSubject<IUrl> = new BehaviorSubject({
		path: ''
	});
	private pathValue = {
		id: 1,
		type: 1,
		url: '/',
		urlAfterRedirects: '/'
	};

	constructor(
		private projectService: ProjectService,
		private epicService: EpicService,
		private storyList: StoriesService,
		private router: Router,
		private location: Location
	) {

		this.router.events.subscribe((event) => {
			if (event instanceof NavigationEnd) {
				this.pathValue = event
				this.urlTemp = {
					path: ''
				};
				this.history.push(event.urlAfterRedirects)
				const separeted = this.pathValue.urlAfterRedirects.split(/\//);
				this.choosePath(separeted);
				this.url.next(this.urlTemp);
			}
		})
	}

	ngOnDestroy(): void {
		this.url.unsubscribe();
	}

	getUrl(): any {
		return this.url;
	}

	back(): void {
		this.history.pop()
		if (this.history.length > 0) {
			this.location.back()
		} else {
			this.router.navigateByUrl('/')
		}
	}

	private choosePath(array: string[]): void {
		if (array[1] === 'my-projects') { this.setPathByProject(array) }
		if (array[1] === 'my-stories') { this.setPathByStory(array) }
		if (array[1] === 'home') { this.urlTemp.path = array[1] }
		if (array[1] === 'settings') { this.urlTemp.path = array[1] }
	}

	private setPathByProject(array: any): any {
		this.urlTemp.path = array[1];
		if (array[2]) {
			const project = this.projectService.getOneProject(Number(array[2]));
			if (project) {
				this.urlTemp.project = project;
			}
		}
		if (array[3]) {
			const epic = this.epicService.getOneEpic(Number(array[3]));
			if (epic) {
				this.urlTemp.epic = epic;
			}
		}
		if (array[4]) {
			const story = this.storyList.getOneStory(Number(array[4]));
			if (story) {
				this.urlTemp.story = story;
			}
		}
	}

	private setPathByStory(array: any): any {
		this.urlTemp.path = array[1];
		if (array[2]) {
			const story = this.storyList.getOneStory(Number(array[2]));
			if (story) {
				this.urlTemp.story = story;
			}
		}
	}
}
