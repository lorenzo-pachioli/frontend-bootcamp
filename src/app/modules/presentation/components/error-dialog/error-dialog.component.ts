import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
	selector: 'app-error-dialog',
	templateUrl: './error-dialog.component.html',
	styleUrls: ['./error-dialog.component.scss']
})
export class ErrorDialogComponent implements OnInit {

	title = '';
	content = '';

	constructor(
		@Inject(MAT_DIALOG_DATA) private data: any,
		private dialogRef: MatDialogRef<ErrorDialogComponent>
	) {
		this.title = this.data.title;
		this.content = this.data.content;
	}

	ngOnInit(): void {
	}

	sendResponse(response: boolean): void {
		this.dialogRef.close({ data: response });
	}
}
