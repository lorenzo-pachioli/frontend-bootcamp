import { Injectable } from '@angular/core';
import { Location } from '@angular/common'
import { Router, NavigationEnd } from '@angular/router'
import { ProjectService } from '../projects/project.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { EpicService } from '../epics/epic.service';
import { IUrl } from '../interfaces/urlInterface';
import { StoriesService } from '../stories/stories.service';

@Injectable({
	providedIn: 'root'
})
export class NavigationService {

	private history: string[] = []

	private urlTemp: IUrl;

	public url: BehaviorSubject<IUrl> = new BehaviorSubject({
		path: '',
		project: false,
		epic: false,
		story: false
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
					path: '',
					project: false,
					epic: false,
					story: false
				};
				this.history.push(event.urlAfterRedirects)
				const separeted = this.pathValue.urlAfterRedirects.split(/\//);
				this.setPathValues(separeted);
				this.url.next(this.urlTemp);
			}
		})
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

	private setPathValues(array): any {
		this.urlTemp.path = array[1];
		if (array[2]) {
			const project = this.projectService.getOneProject(Number(array[2]));
			this.urlTemp.project = project ? project : false;
		}
		if (array[3]) {
			const epic = this.epicService.getOneEpic(Number(array[3]));
			this.urlTemp.epic = epic ? epic : false;
		}
		if (array[4]) {
			const story = this.storyList.getOneStory(Number(array[4]));
			this.urlTemp.story = story ? story : false;
		}
	}
}
