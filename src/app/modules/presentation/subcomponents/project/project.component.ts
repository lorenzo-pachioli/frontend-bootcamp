import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EpicService } from 'src/app/modules/api-rest/services/epics/epic.service';
import { IEpic } from 'src/app/modules/api-rest/services/interfaces/epicInterface';
import { IProject } from 'src/app/modules/api-rest/services/interfaces/projectInterface';
import { ProjectService } from 'src/app/modules/api-rest/services/projects/project.service';

@Component({
	selector: 'app-project',
	templateUrl: './project.component.html',
	styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

	project: IProject;
	epics: Array<IEpic> = [];
	loading = true;
	constructor(private route: ActivatedRoute, public projectList: ProjectService, public epicList: EpicService) { }

	ngOnInit(): void {
		const id = Number(this.route.snapshot.paramMap.get('id'));
		const project = this.projectList.getOneProject(id);
		if (project) {
			this.project = project;
			const epics = this.epicList.getEpicsByProyectId(id);
			if (epics) {
				this.epics = epics;
			}
		} else {
			this.loading = false;
		}
	}

}
