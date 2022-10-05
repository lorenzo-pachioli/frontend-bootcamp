import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { IProject } from 'src/app/modules/core/interfaces/projectInterface';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class ProjectService {

	private projectsList: Array<IProject>;
	public projectsList$: BehaviorSubject<Array<IProject>> = new BehaviorSubject([]);
	private url = 'https://lamansys-tasks-fake-api.herokuapp.com/api/projects';

	constructor(private readonly http: HttpClient) {
		this.projectsList$.subscribe(data => {
			this.projectsList = data;
		});
	}

	getProjects(): any {
		return this.projectsList;
	}

	getOneProject(id: number): IProject | false {
		const project = this.projectsList.find(p => p.id === id);
		if (project) {
			return project;
		}
		return false;
	}

	private fetchHttp(token: string): Observable<any> {
		if (token) {
			return this.http.get(this.url, {
				headers: {
					auth: token
				}
			})
		}
	}

	fetchProjects(): Promise<any> {
		const token = sessionStorage.getItem('token');
		return new Promise((resolve) => {
			this.fetchHttp(token).subscribe(projectResult => {
				if (projectResult.success) {
					this.projectsList$.next(projectResult.data);
					resolve(true);
				} else {
					resolve(false);
				}
			});
		});
	}
}
