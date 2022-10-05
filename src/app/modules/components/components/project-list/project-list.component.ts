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
	loading = true;
	constructor(public projectService: ProjectService) {
		this.projectService.projectsList$.subscribe(data => {
			if (data) {
				this.projects = data;
			} else {
				this.loading = false;
			}
		});
	}

	ngOnInit(): void {

	}

	OnDestroy(): void {
		this.projectService.projectsList$.unsubscribe();
	}

	setRoute(id: number): string {
		return `/my-projects/${id}`;
	}

}
