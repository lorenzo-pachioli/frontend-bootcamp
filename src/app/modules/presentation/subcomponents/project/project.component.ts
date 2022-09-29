import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EpicService } from 'src/app/modules/api-rest/services/epics/epic.service';
import { IEpic } from 'src/app/modules/api-rest/services/interfaces/epicInterface';
import { IProject } from 'src/app/modules/api-rest/services/interfaces/projectInterface';
import { IUrl } from 'src/app/modules/api-rest/services/interfaces/urlInterface';
import { NavigationService } from 'src/app/modules/api-rest/services/navigation/navigation.service';
import { ProjectService } from 'src/app/modules/api-rest/services/projects/project.service';
import { StoriesService } from 'src/app/modules/api-rest/services/stories/stories.service';

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
			console.log(sub.project, sub.epic)
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

