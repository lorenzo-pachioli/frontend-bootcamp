import { Injectable } from '@angular/core';
import { Location } from '@angular/common'
import { Router, NavigationEnd } from '@angular/router'
import { ProjectService } from '../projects/project.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class NavigationService {

	private history: string[] = []

	private urlTemp = {
		path: '',
		projectName: '',
		epicName: '',
		storyName: ''
	}

	public url = new BehaviorSubject({
		path: '',
		projectName: '',
		epicName: '',
		storyName: ''
	});

	private pathValue = {
		id: 1,
		type: 1,
		url: '/',
		urlAfterRedirects: '/'
	};

	constructor(private projectService: ProjectService, private router: Router, private location: Location) {
		this.router.events.subscribe((event) => {
			if (event instanceof NavigationEnd) {
				this.pathValue = event
				this.urlTemp = {
					path: '',
					projectName: '',
					epicName: '',
					storyName: ''
				};
				this.history.push(event.urlAfterRedirects)
				const separeted = this.pathValue.urlAfterRedirects.split(/\//);
				this.setPathValues(separeted);
				this.url.next(this.urlTemp);
			}
		})
	}

	back(): void {
		this.history.pop()
		if (this.history.length > 0) {
			this.location.back()
		} else {
			this.router.navigateByUrl('/')
		}
	}

	private setPathValues(array): any {
		this.urlTemp.path = array[1];
		if (array[2]) {
			const project = this.projectService.getOneProject(Number(array[2]));
			this.urlTemp.projectName = project ? project.name : '';
		}
	}
}
