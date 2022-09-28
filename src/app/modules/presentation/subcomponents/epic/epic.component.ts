import { Component, OnInit } from '@angular/core';
import { EpicService } from 'src/app/modules/api-rest/services/epics/epic.service';
import { IUrl } from 'src/app/modules/api-rest/services/interfaces/urlInterface';
import { NavigationService } from 'src/app/modules/api-rest/services/navigation/navigation.service';
import { ProjectService } from 'src/app/modules/api-rest/services/projects/project.service';
import { StoriesService } from '../../../api-rest/services/stories/stories.service';

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
			console.log(sub.project, sub.epic)
			this.url.path = sub.path
			this.url.project = sub.project
			this.url.epic = sub.epic
			this.url.story = sub.story
		});
	}

	ngOnInit(): void {
		if (this.url.epic) {
			this.item = this.url.epic;
			const stories = this.storyList.getStoriesByEpicId(this.url.epic.id);
			console.log(stories);
			if (stories.length > 0) {
				this.list = stories;
			} else {
				this.loading = false;
			}
		}
	}
}
