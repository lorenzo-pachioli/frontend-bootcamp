import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EpicService } from 'src/app/modules/api-rest/services/epics/epic.service';
import { ProjectService } from 'src/app/modules/api-rest/services/projects/project.service';
import { StoriesService } from 'src/app/modules/api-rest/services/stories/stories.service';
import { IUrl } from 'src/app/modules/core/interfaces/urlInterface';
import { NavigationService } from 'src/app/modules/core/services/navigation/navigation.service';
import { AddEpicDialogComponent } from '../add-epic-dialog/add-epic-dialog.component';

@Component({
	selector: 'app-project',
	templateUrl: './project.component.html',
	styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

	item;
	list = [];
	url: IUrl = {
		path: ''
	};
	loading = true;
	constructor(
		private navigation: NavigationService,
		public projectList: ProjectService,
		public epicList: EpicService,
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
		this.epicList.epicList$.subscribe(() => {
			const task = this.epicList.getEpicsByProyectId(this.url.project && this.url.project._id);
			if (task.length > 0) {
				this.list = task;
			} else {
				this.loading = false;
			}
		})
	}

	ngOnInit(): void {
		const token = sessionStorage.getItem('token');
		if (this.url.project) {
			this.epicList.fetchEpics();
			this.item = this.url.project;
			const epics = this.epicList.getEpicsByProyectId(this.url.project && this.url.project._id);
			if (epics.length > 0) {
				this.list = epics;
			} else {
				this.loading = false;
			}
		} else {
			this.router.navigate(['/not-found']);
		}
	}

	setRoute(id: number): string {
		return `/my-projects/${this.url.project && this.url.project.id}/${id}`;
	}

	openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
		this.dialog.open(AddEpicDialogComponent, {
			width: '600px',
			enterAnimationDuration,
			exitAnimationDuration,
			disableClose: true
		});
	}
}
