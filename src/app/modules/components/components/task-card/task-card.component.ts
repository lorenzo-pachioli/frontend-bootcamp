import { Component, OnInit, Input } from '@angular/core';
import { ITasks } from 'src/app/modules/core/interfaces/tasksInterface';
import { DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { TasksService } from 'src/app/modules/api-rest/services/tasks/tasks.service';
import { ConfirmationDialogComponent } from '../../../presentation/components/confirmation-dialog/confirmation-dialog.component';

@Component({
	selector: 'app-task-card',
	templateUrl: './task-card.component.html',
	styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent implements OnInit {

	deletedStatus = false;
	@Input() task?: ITasks;
	@Input() deleteTask?: Promise<boolean>;
	constructor(
		public datepipe: DatePipe,
		public taskList: TasksService,
		public dialog: MatDialog
	) { }

	ngOnInit(): void {
	}

	changeState(event: boolean): void {
		const token = sessionStorage.getItem('token');
		this.task.done = event;
		this.taskList.updateTask(token, this.task.id, this.task)
			.then(response => {
				if (!response) {
					this.task.done = response;
					console.error('fail update');
				}
			})
	}

	setCreated(): string {
		if (this.task && this.task.created) {
			const date = this.datepipe.transform(this.task.created, 'dd/MM/yyyy');
			if (date) {
				return `${date}`;
			}
			return '';
		}
	}

	taskDueDate(): string {
		if (this.task && this.task.dueDate) {
			const date = this.datepipe.transform(this.task.dueDate, 'dd/MM/yyyy');
			if (date) {
				return `${date}`;
			}
			return '';
		}
	}

	openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
		this.dialog.open(ConfirmationDialogComponent, {
			width: '250px',
			enterAnimationDuration,
			exitAnimationDuration,
			data: {
				id: this.task.id,
				item: 'TASK'
			}
		});
	}
}
