import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/modules/api-rest/services/projects/project.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
	selector: 'app-project-delete-confirmation',
	templateUrl: './project-delete-confirmation.component.html',
	styleUrls: ['./project-delete-confirmation.component.scss']
})
export class ProjectDeleteConfirmationComponent implements OnInit {

	deleting = false;
	fail = false;

	constructor(
		private projectService: ProjectService,
		@Inject(MAT_DIALOG_DATA) private data: any,
		private dialogRef: MatDialogRef<ProjectDeleteConfirmationComponent>
	) { }

	ngOnInit(): void {
	}

	deleteProject(): void {

		this.deleting = true;
		const token = sessionStorage.getItem('token');
		this.projectService.deleteProject(token, this.data.id)
			.then(response => {
				if (response) {
					this.deleting = false;
					this.dialogRef.close();
				} else {
					this.fail = true;
				}
			})
	}
}
