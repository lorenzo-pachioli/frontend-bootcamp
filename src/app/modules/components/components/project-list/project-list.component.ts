import { Component, OnInit } from '@angular/core';
import { EpicService } from 'src/app/modules/api-rest/services/epics/epic.service';
import { ProjectService } from 'src/app/modules/api-rest/services/projects/project.service';

@Component({
	selector: 'app-project-list',
	templateUrl: './project-list.component.html',
	styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

	projects = [];
	epics = [];
	loading = true;
	constructor(public projectService: ProjectService) {
	}

	ngOnInit(): void {
		this.projectService.projectsList$.subscribe(data => {
			if (data) {
				this.projects = data;
			} else {
				this.loading = false;
			}
		});
	}

	setRoute(id: number): string {
		return `/my-projects/${id}`;
	}

}
