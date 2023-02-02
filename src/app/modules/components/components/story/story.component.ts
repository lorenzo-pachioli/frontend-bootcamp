import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TasksService } from 'src/app/modules/api-rest/services/tasks/tasks.service';
import { IUrl } from 'src/app/modules/core/interfaces/urlInterface';
import { NavigationService } from 'src/app/modules/core/services/navigation/navigation.service';
import { AddTaskDialogComponent } from 'src/app/modules/components/components/add-task-dialog/add-task-dialog.component';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-story',
	templateUrl: './story.component.html',
	styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit, OnDestroy {

	item;
	list = [];
	url: IUrl = {
		path: ''
	};
	loading = true;
	navigationSubscription: Subscription;
	taskSubscription: Subscription;

	constructor(
		private navigation: NavigationService,
		public taskList: TasksService,
		public dialog: MatDialog,
		private router: Router
	) {

		this.navigationSubscription = this.navigation.url.subscribe(sub => {
			this.url.path = sub.path
			this.url.project = sub.project
			this.url.epic = sub.epic
			this.url.story = sub.story
		});

		this.taskSubscription = this.taskList.tasksList$.subscribe(() => {
			if (this.url.story) {
				const task = this.taskList.getTasksByStoryId(this.url.story._id);
				this.list = task;
			}
		});
	}

	ngOnInit(): void {
		if (this.url.story) {
			this.taskList.fetchTasks();
			this.item = this.url.story;
			const task = this.taskList.getTasksByStoryId(this.url.story._id);
			this.list = task;
			this.loading = false;
		} else {
			this.router.navigate(['/not-found']);
		}
	}

	ngOnDestroy(): void {
		this.navigationSubscription.unsubscribe();
		this.taskSubscription.unsubscribe();
	}

	openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
		this.dialog.open(AddTaskDialogComponent, {
			width: '400px',
			enterAnimationDuration,
			exitAnimationDuration,
			disableClose: true
		});
	}
}
