import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { TasksService } from 'src/app/modules/api-rest/services/tasks/tasks.service';

@Component({
	selector: 'app-confirmation-dialog',
	templateUrl: './confirmation-dialog.component.html',
	styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent implements OnInit {

	deleting = false;
	fail = false;

	constructor(
		private taskList: TasksService,
		@Inject(MAT_DIALOG_DATA) private data: any,
		private dialogRef: MatDialogRef<ConfirmationDialogComponent>
	) {
	}

	ngOnInit(): void {
	}

	deleteTask(): void {
		this.deleting = true;
		const token = sessionStorage.getItem('token');
		console.log('before delete', this.data.id);
		this.taskList.deleteTask(token, this.data.id)
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
