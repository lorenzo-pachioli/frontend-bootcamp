import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EpicService } from 'src/app/modules/api-rest/services/epics/epic.service';
import { ProjectService } from 'src/app/modules/api-rest/services/projects/project.service';
import { StoriesService } from 'src/app/modules/api-rest/services/stories/stories.service';
import { IUrl } from 'src/app/modules/core/interfaces/urlInterface';
import { NavigationService } from 'src/app/modules/core/services/navigation/navigation.service';

@Component({
	selector: 'app-epic',
	templateUrl: './epic.component.html',
	styleUrls: ['./epic.component.scss']
})
export class EpicComponent implements OnInit {

	item;
	list = [];
	url: IUrl = {
		path: ''
	};
	loading = true;
	constructor(
		private navigation: NavigationService,
		public projectList: ProjectService,
		public epicList: EpicService,
		public storyList: StoriesService,
		private router: Router
	) {
		this.navigation.url.subscribe(sub => {
			this.url.path = sub.path
			this.url.project = sub.project
			this.url.epic = sub.epic
			this.url.story = sub.story
		});
		this.storyList.storiesList$.subscribe(() => {
			const task = this.storyList.getStoriesByEpicId(this.url.epic && this.url.epic._id);
			if (task.length > 0) {
				this.list = task;
			} else {
				this.loading = false;
			}
		})
	}

	ngOnInit(): void {
		const token = sessionStorage.getItem('token');
		if (this.url.epic) {
			this.storyList.fetchStories();
			this.item = this.url.epic;
			const stories = this.storyList.getStoriesByEpicId(this.url.epic && this.url.epic._id);
			if (stories.length > 0) {
				this.list = stories;
			} else {
				this.loading = false;
			}
		} else {
			this.router.navigate(['/not-found']);
		}
	}

	setRoute(id: number): string {
		return `/my-projects/${this.url.project && this.url.project.id}/${this.url.epic && this.url.epic.id}/${id}`;
	}
}
