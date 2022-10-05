import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { EpicService } from 'src/app/modules/api-rest/services/epics/epic.service';
import { ProjectService } from 'src/app/modules/api-rest/services/projects/project.service';
import { StoriesService } from 'src/app/modules/api-rest/services/stories/stories.service';
import { TasksService } from 'src/app/modules/api-rest/services/tasks/tasks.service';
import { ITasks } from 'src/app/modules/core/interfaces/tasksInterface';
import { IUrl } from 'src/app/modules/core/interfaces/urlInterface';
import { NavigationService } from 'src/app/modules/core/services/navigation/navigation.service';
import { AddTaskDialogComponent } from 'src/app/modules/presentation/components/add-task-dialog/add-task-dialog.component';

@Component({
	selector: 'app-story',
	templateUrl: './story.component.html',
	styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {

	item;
	list = [];
	url: IUrl = {
		path: '',
		project: false,
		epic: false,
		story: false
	};
	loading = true;
	constructor(
		private navigation: NavigationService,
		public projectList: ProjectService,
		public epicList: EpicService,
		public storyList: StoriesService,
		public taskList: TasksService,
		public dialog: MatDialog
	) {
		this.navigation.url.subscribe(sub => {
			this.url.path = sub.path
			this.url.project = sub.project
			this.url.epic = sub.epic
			this.url.story = sub.story
		});

		this.taskList.tasksList$.subscribe(() => {
			const task = this.taskList.getTasksByStoryId(this.url.story && this.url.story._id);
			if (task.length > 0) {
				this.list = task;
			} else {
				this.loading = false;
			}
		})
	}

	ngOnInit(): void {
		const token = sessionStorage.getItem('token');
		if (this.url.story) {
			this.item = this.url.story;
			const task = this.taskList.getTasksByStoryId(this.url.story && this.url.story._id);
			if (task.length > 0) {
				this.list = task;
			} else {
				this.loading = false;
			}
		}
	}

	openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
		const dialogRef = this.dialog.open(AddTaskDialogComponent, {
			width: '400px',
			enterAnimationDuration,
			exitAnimationDuration,
			disableClose: true
		});
	}
}
