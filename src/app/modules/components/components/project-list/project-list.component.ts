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
		const token = sessionStorage.getItem('token');
		this.projectService.fetchProjects(token).subscribe(res => {
			if (res.success) {
				this.projectService.projectsList$.next(res.data);
			}
		});
		this.projectService.projectsList$.subscribe(data => {
			if (data) {
				this.projects = data;
			} else {
				this.loading = false;
			}
		});
	}

	OnDestroy(): void {
		this.projectService.projectsList$.unsubscribe();
	}

	setRoute(id: number): string {
		return `/my-projects/${id}`;
	}

}
