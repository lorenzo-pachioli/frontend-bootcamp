import { Component, OnInit } from '@angular/core';
import { EpicService } from 'src/app/modules/api-rest/services/epics/epic.service';
import { ProjectService } from '../../../api-rest/services/projects/project.service';

@Component({
	selector: 'app-my-projects',
	templateUrl: './my-projects.component.html',
	styleUrls: ['./my-projects.component.scss']
})
export class MyProjectsComponent implements OnInit {

	projects = [];
	epics = [];
	loading = true;
	constructor(public projectList: ProjectService, public epicList: EpicService) { }

	ngOnInit(): void {
		const data = this.projectList.getProjects();
		if (data) {
			this.projects = data;
		} else {
			this.loading = false;
		}
	}

	setEpicList(id: number): void {
		this.epics = this.epicList.getEpicsByProyectId(id);
	}
}
