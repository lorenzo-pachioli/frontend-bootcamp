import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { EpicService } from 'src/app/modules/api-rest/services/epics/epic.service';
import { NavigationService } from 'src/app/modules/core/services/navigation/navigation.service';

@Component({
	selector: 'app-add-epic-dialog',
	templateUrl: './add-epic-dialog.component.html',
	styleUrls: ['./add-epic-dialog.component.scss']
})
export class AddEpicDialogComponent implements OnInit {

	loading = false;
	today = new Date();
	minDate = this.today.getDay();
	maxDate = new Date(this.today.getFullYear() + 1);
	name = new FormControl('', Validators.minLength(2));
	description = new FormControl('', Validators.minLength(10));
	newEpic = new FormGroup({
		name: this.name,
		description: this.description
	});

	constructor(
		public dialogRef: MatDialogRef<AddEpicDialogComponent>,
		public route: NavigationService,
		public epicList: EpicService
	) { }

	ngOnInit(): void {
	}

	onClose(): void {
		this.dialogRef.close();
	}

	addEpic(): void {
		this.loading = true;
		const token = sessionStorage.getItem('token');
		const project = this.route.getUrl()._value.project;
		const epic = {
			name: this.newEpic.value.name,
			description: this.newEpic.value.description,
			project: project && project._id
		};
		this.epicList.addEpic(token, epic).subscribe({
			next: (epicResult) => {
				this.loading = false;
				this.dialogRef.close();
				const current = this.epicList.epicList;
				current.push(epicResult.data);
				this.epicList.epicList$.next(current);
			},
			error: () => this.loading = false
		});
	}
}
