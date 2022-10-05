import { Component, OnInit, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { IProject } from 'src/app/modules/core/interfaces/projectInterface';
import { IEpic } from 'src/app/modules/core/interfaces/epicInterface';
import { IStory } from 'src/app/modules/core/interfaces/storyInterface';
import { ITasks } from 'src/app/modules/core/interfaces/tasksInterface';
import { ProjectService } from 'src/app/modules/api-rest/services/projects/project.service';
import { EpicService } from 'src/app/modules/api-rest/services/epics/epic.service';
import { StoriesService } from 'src/app/modules/api-rest/services/stories/stories.service';
import { TasksService } from 'src/app/modules/api-rest/services/tasks/tasks.service';
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
	deletedStatus = false;
	@Input() project?: IProject;
	@Input() epic?: IEpic;
	@Input() story?: IStory;
	@Input() task?: ITasks;
	@Input() deleteTask?: Promise<boolean>;

	constructor(
		public datepipe: DatePipe,
		public projectList: ProjectService,
		public epicList: EpicService,
		public storyList: StoriesService,
		public taskList: TasksService,
		public dialog: MatDialog
	) { }

	ngOnInit(): void {
		this.setItemValue(this.project, 'project');
		this.setItemValue(this.epic, 'epic');
		this.setItemValue(this.story, 'story');
		this.setItemValue(this.task, 'task');
	}

	setItemValue(input: IProject | IEpic | IStory | ITasks, path: string): void {
		if (input) {
			this.item.name = input.name
			this.item.description = input.description
			this.path = path;
		}
	}

	changeState(event: boolean): void {
		const token = sessionStorage.getItem('token');
		this.task.done = event;
		console.log(this.task, event);
		this.taskList.updateTask(token, this.task.id, this.task)
			.then(response => {
				if (!response) {
					this.task.done = response;
					console.error('fail update');
				}
			})
	}

	itemColor(): any {
		if (this.project && this.project.icon) {
			return {
				color: `${this.project.icon}`,
				border: `2px solid ${this.project.icon}`
			}
		}
	}

	setCreated(): string {
		let date;
		if (this.task) {
			date = this.datepipe.transform(this.task.created, 'dd/MM/yyyy');
			return `Created: ${date}`;
		}
		if (this.story) {
			date = this.datepipe.transform(this.story.created, 'dd/MM/yyyy');
			return `Created: ${date}`;
		}
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
			data: {
				id: this.task.id
			}
		});
	}

	setStatus(): string {
		return `Status: ${this.story.status}`
	}

}
