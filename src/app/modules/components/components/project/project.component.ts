import { Component, OnInit } from '@angular/core';
import { EpicService } from 'src/app/modules/api-rest/services/epics/epic.service';
import { ProjectService } from 'src/app/modules/api-rest/services/projects/project.service';
import { StoriesService } from 'src/app/modules/api-rest/services/stories/stories.service';
import { IUrl } from 'src/app/modules/core/interfaces/urlInterface';
import { NavigationService } from 'src/app/modules/core/services/navigation/navigation.service';

@Component({
	selector: 'app-project',
	templateUrl: './project.component.html',
	styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

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
		this.item = this.url.project;
		const epics = this.epicList.getEpicsByProyectId(this.url.project && this.url.project.id);
		if (epics.length > 0) {
			this.list = epics;
		} else {
			this.loading = false;
		}
	}

	setRoute(id: number): string {
		return `/my-projects/${this.url.project && this.url.project.id}/${id}`;
	}
}


