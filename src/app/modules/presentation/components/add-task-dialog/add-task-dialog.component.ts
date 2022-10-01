import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NavigationService } from 'src/app/modules/core/services/navigation/navigation.service';

@Component({
	selector: 'app-add-task-dialog',
	templateUrl: './add-task-dialog.component.html',
	styleUrls: ['./add-task-dialog.component.scss']
})
export class AddTaskDialogComponent implements OnInit {

	today = new Date();
	minDate = this.today.getDay();
	maxDate = new Date(this.today.getFullYear() + 1);
	name = new FormControl('', Validators.minLength(2));
	description = new FormControl('', Validators.minLength(10));
	dueDate = new FormControl(new Date());
	newTask = new FormGroup({
		name: this.name,
		description: this.description,
		dueDate: this.dueDate
	});

	constructor(public dialogRef: MatDialogRef<AddTaskDialogComponent>, public route: NavigationService) {

	}

	ngOnInit(): void {
	}

	onNoClick(): void {
		this.dialogRef.close();
	}

	onNewTask(): any {
		const story = this.route.getUrl();
		return {
			id: 4,
			name: this.newTask.value.name,
			description: this.newTask.value.description,
			dueDate: this.newTask.value.dueDate,
			created: this.today,
			story: story._value.story && story._value.story.id.toString(),
			done: false
		}
	}
}
