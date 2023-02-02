import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { StoriesService } from 'src/app/modules/api-rest/services/stories/stories.service';
import { IEpic } from 'src/app/modules/core/interfaces/epicInterface';
import { IUrl } from 'src/app/modules/core/interfaces/urlInterface';
import { NavigationService } from 'src/app/modules/core/services/navigation/navigation.service';
import { AddStoryDialogComponent } from '../add-story-dialog/add-story-dialog.component';

@Component({
	selector: 'app-epic',
	templateUrl: './epic.component.html',
	styleUrls: ['./epic.component.scss']
})
export class EpicComponent implements OnInit, OnDestroy {

	item;
	list = [];
	url: IUrl = {
		path: ''
	};
	loading = true;

	constructor(
		private navigation: NavigationService,
		public storyList: StoriesService,
		private router: Router,
		public dialog: MatDialog
	) {
		this.navigation.url.subscribe(sub => {
			this.url.path = sub.path
			this.url.project = sub.project
			this.url.epic = sub.epic
			this.url.story = sub.story
		});
		this.storyList.storiesList$.subscribe(() => {
			const task = this.storyList.getStoriesByEpicId(this.url.epic && this.url.epic._id);
			if (task.length > 0) {
				this.list = task;
			} else {
				this.loading = false;
			}
		})
	}

	ngOnInit(): void {
		if (this.url.epic) {
			this.storyList.fetchStories();
			this.item = this.url.epic;
			const stories = this.storyList.getStoriesByEpicId(this.url.epic && this.url.epic._id);
			if (stories.length > 0) {
				this.list = stories;
			} else {
				this.loading = false;
			}
		} else {
			this.router.navigate(['/not-found']);
		}
	}

	ngOnDestroy(): void {
		this.navigation.url.unsubscribe();
		this.storyList.storiesList$.unsubscribe();
	}

	setRoute(id: number): string {
		return `/my-projects/${this.url.project && this.url.project.id}/${this.url.epic && this.url.epic.id}/${id}`;
	}

	openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
		this.dialog.open(AddStoryDialogComponent, {
			width: '600px',
			enterAnimationDuration,
			exitAnimationDuration,
			disableClose: true
		});
	}
}
