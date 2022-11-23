import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { TasksService } from 'src/app/modules/api-rest/services/tasks/tasks.service';
import { ITasks } from 'src/app/modules/core/interfaces/tasksInterface';
import { NavigationService } from 'src/app/modules/core/services/navigation/navigation.service';

@Component({
	selector: 'app-add-task-dialog',
	templateUrl: './add-task-dialog.component.html',
	styleUrls: ['./add-task-dialog.component.scss']
})
export class AddTaskDialogComponent implements OnInit {

	loading = false;
	today = new Date();
	minDate = this.today.getDay();
	maxDate = new Date(this.today.getFullYear() + 1);
	name = new FormControl('', Validators.minLength(2));
	description = new FormControl('', Validators.minLength(10));
	newTask = new FormGroup({
		name: this.name,
		description: this.description
	});

	constructor(
		public dialogRef: MatDialogRef<AddTaskDialogComponent>,
		public route: NavigationService,
		public taskList: TasksService
	) { }

	ngOnInit(): void {
	}

	onClose(): void {
		this.dialogRef.close();
	}

	addtask(): void {
		this.loading = true;
		const token = sessionStorage.getItem('token');
		const story = this.route.getUrl();
		const task = {
			name: this.newTask.value.name,
			description: this.newTask.value.description,
			created: this.today,
			story: story._value.story && story._value.story._id
		};
		this.taskList.addTask(token, task).subscribe(taskResult => {
			console.log(taskResult);
			if (taskResult.success) {
				this.loading = false;
				this.dialogRef.close();
				const current = this.taskList.tasksList;
				current.push(taskResult.data);
				this.taskList.tasksList$.next(current);
			}
		});
	}
}
