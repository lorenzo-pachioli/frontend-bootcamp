import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { TasksService } from 'src/app/modules/api-rest/services/tasks/tasks.service';
import { ProjectService } from 'src/app/modules/api-rest/services/projects/project.service';
import { EpicService } from 'src/app/modules/api-rest/services/epics/epic.service';
import { StoriesService } from 'src/app/modules/api-rest/services/stories/stories.service';

@Component({
	selector: 'app-confirmation-dialog',
	templateUrl: './confirmation-dialog.component.html',
	styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent implements OnInit {

	deleting = false;
	fail = false;
	token = sessionStorage.getItem('token');

	constructor(
		private taskList: TasksService,
		private projectService: ProjectService,
		private epicService: EpicService,
		private storyService: StoriesService,
		@Inject(MAT_DIALOG_DATA) private data: any,
		private dialogRef: MatDialogRef<ConfirmationDialogComponent>
	) {
	}

	ngOnInit(): void {
	}

	setTranslatorQuestion(): any {
		if (this.data.item) { return `app.DELETE.QUESTION-${this.data.item}.${this.data.item}` };
	}

	setTranslatorDeleting(): any {
		if (this.data.item) { return `app.DELETE.QUESTION-${this.data.item}.DELETING` };
	}

	setTranslatorFail(): any {
		if (this.data.item) { return `app.DELETE.QUESTION-${this.data.item}.FAIL` };
	}

	deleteItem(): void {
		this.deleting = true;
		if (this.data.item === 'PROJECT') {
			this.deleteProject();
		}
		if (this.data.item === 'EPIC') {
			this.deleteEpic();
		}
		if (this.data.item === 'STORY') {
			this.deleteStory();
		}
		if (this.data.item === 'TASK') {
			this.deleteTaskd();
		}
	}

	deleteResponseHandler(response: boolean): void {
		if (response) {
			this.deleting = false;
			this.dialogRef.close();
		} else {
			this.fail = true;
		}
	}

	deleteTaskd(): void {
		this.taskList.deleteTask(this.token, this.data.id)
			.then(response => {
				this.deleteResponseHandler(response)
			})
			.catch(() => {
				this.deleteResponseHandler(false);
			});
	}

	deleteProject(): void {
		this.projectService.deleteProject(this.token, this.data.id)
			.then(response => {
				this.deleteResponseHandler(response)
			})
			.catch(() => {
				this.deleteResponseHandler(false);
			});
	}

	deleteEpic(): void {
		this.epicService.deleteEpic(this.token, this.data.id)
			.then(response => {
				this.deleteResponseHandler(response)
			})
			.catch(() => {
				this.deleteResponseHandler(false);
			});
	}

	deleteStory(): void {
		this.storyService.deleteStory(this.token, this.data.id)
			.then(response => {
				this.deleteResponseHandler(response)
			})
			.catch(() => {
				this.deleteResponseHandler(false);
			});
	}
}
