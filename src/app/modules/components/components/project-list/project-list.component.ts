import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProjectService } from 'src/app/modules/api-rest/services/projects/project.service';
import { AddProjectDialogComponent } from '../add-project-dialog/add-project-dialog.component';

@Component({
	selector: 'app-project-list',
	templateUrl: './project-list.component.html',
	styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit, OnDestroy {

	projects = [];
	loading = true;

	constructor(public projectService: ProjectService, public dialog: MatDialog) {

		this.projectService.projectsList$.subscribe(data => {
			if (data.length > 0) {
				this.projects = data;
			} else {
				this.loading = false;
			}
		});
	}

	ngOnInit(): void {
		this.projectService.fetchProjects();
	}

	ngOnDestroy(): void {
		this.projectService.projectsList$.unsubscribe();
	}

	setRoute(id: number): string {
		return `/my-projects/${id}`;
	}

	openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
		this.dialog.open(AddProjectDialogComponent, {
			width: '600px',
			enterAnimationDuration,
			exitAnimationDuration,
			disableClose: true
		});
	}
}
