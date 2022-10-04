import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { IProject } from 'src/app/modules/core/interfaces/projectInterface';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class ProjectService {

	private projectsMock: Array<IProject>;
	public projectsMock$: BehaviorSubject<Array<IProject>> = new BehaviorSubject([]);
	public projecLoaded$: BehaviorSubject<boolean> = new BehaviorSubject(false);
	private url = 'https://lamansys-tasks-fake-api.herokuapp.com/api/projects';

	constructor(private readonly http: HttpClient) {
		this.projectsMock$.subscribe(data => {
			this.projectsMock = data;
		});
	}

	getProjects(): any {
		return this.projectsMock;
	}

	getOneProject(id: number): IProject | false {
		const project = this.projectsMock.find(p => p.id === id);
		if (project) {
			return project;
		}
		return false;
	}

	fetchProjects(token: string): Observable<any> {
		if (token) {
			return this.http.get(this.url, {
				headers: {
					auth: token
				}
			})
		}
	}
}
