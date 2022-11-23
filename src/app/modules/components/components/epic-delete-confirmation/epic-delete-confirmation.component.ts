import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { EpicService } from 'src/app/modules/api-rest/services/epics/epic.service';

@Component({
	selector: 'app-epic-delete-confirmation',
	templateUrl: './epic-delete-confirmation.component.html',
	styleUrls: ['./epic-delete-confirmation.component.scss']
})
export class EpicDeleteConfirmationComponent implements OnInit {

	deleting = false;
	fail = false;

	constructor(
		private epicService: EpicService,
		@Inject(MAT_DIALOG_DATA) private data: any,
		private dialogRef: MatDialogRef<EpicDeleteConfirmationComponent>
	) { }

	ngOnInit(): void {
	}

	deleteEpic(): void {
		this.deleting = true;
		const token = sessionStorage.getItem('token');
		this.epicService.deleteEpic(token, this.data.id)
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
