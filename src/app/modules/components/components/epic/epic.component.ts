import { Component, OnInit } from '@angular/core';
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
		path: '',
		project: false,
		epic: false,
		story: false
	};
	loading = true;
	constructor(
		private navigation: NavigationService,
		public projectList: ProjectService,
		public epicList: EpicService,
		public storyList: StoriesService
	) {
		this.navigation.url.subscribe(sub => {
			this.url.path = sub.path
			this.url.project = sub.project
			this.url.epic = sub.epic
			this.url.story = sub.story
		});
	}

	ngOnInit(): void {
		const token = sessionStorage.getItem('token');
		if (this.url.epic) {
			this.item = this.url.epic;
			this.storyList.fetchStories(token).subscribe(storyResponse => {
				if (storyResponse.success) {
					this.storyList.storiesList$.next(storyResponse.data);
				}
				const stories = this.storyList.getStoriesByEpicId(this.url.epic && this.url.epic._id);
				if (stories.length > 0) {
					this.list = stories;
				} else {
					this.loading = false;
				}
			});
		}
	}

	setRoute(id: number): string {
		return `/my-projects/${this.url.project && this.url.project.id}/${this.url.epic && this.url.epic.id}/${id}`;
	}
}
