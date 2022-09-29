import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IEpic } from '../../api-rest/services/interfaces/epicInterface';
import { IProject } from '../../api-rest/services/interfaces/projectInterface';
import { IStory } from '../../api-rest/services/interfaces/storyInterface';
import { ITasks } from '../../api-rest/services/interfaces/tasksInterface';
import { DatePipe } from '@angular/common';
import { ProjectService } from '../../api-rest/services/projects/project.service';
import { EpicService } from '../../api-rest/services/epics/epic.service';
import { StoriesService } from '../../api-rest/services/stories/stories.service';
import { TasksService } from '../../api-rest/services/tasks/tasks.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

	withColor = '';
	withoutColor = 'none';
	item = {
		name: '',
		description: ''
	};
	path = '';
	@Input() project?: IProject;
	@Input() epic?: IEpic;
	@Input() story?: IStory;
	@Input() task?: ITasks;
	constructor(
		public datepipe: DatePipe,
		public projectList: ProjectService,
		public epicList: EpicService,
		public storyList: StoriesService,
		public taskList: TasksService,
		public dialog: MatDialog
	) { }

	ngOnInit(): void {
		if (this.project) {
			this.item.name = this.project.name;
			this.item.description = this.project.description;
			this.path = 'project';
		}
		if (this.epic) {
			this.item.name = this.epic.name;
			this.item.description = this.epic.description;
			this.path = 'epic';
		}
		if (this.story) {
			this.item.name = this.story.name;
			this.item.description = this.story.description;
			this.path = 'story';
		}
		if (this.task) {
			this.item.name = this.task.name;
			this.item.description = this.task.description;
			this.path = 'task';
		}
	}

	changeState(event: boolean): void {
		this.task.done = event;
		this.taskList.updateTask(this.task);
	}

	itemColor(): any {
		if (this.project && this.project.icon) {
			return {
				color: `${this.project.icon}`,
				border: `2px solid ${this.project.icon}`
			}
		}
	}

	taskCreated(): string {
		const date = this.datepipe.transform(this.task.created, 'dd/MM/yyyy');
		return `Created: ${date}`;
	}

	taskDueDate(): string {
		const date = this.datepipe.transform(this.task.dueDate, 'dd/MM/yyyy');
		return `DueDate: ${date}`;
	}

	openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
		const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
			width: '250px',
			enterAnimationDuration,
			exitAnimationDuration,
		});
		dialogRef.afterClosed().subscribe(result => {
			if (result) {
				this.deleteTask()
			}
		});
	}

	deleteTask(): void {
		console.log('task:', this.task);
		this.taskList.deleteTask(this.task.id);
	}

}
