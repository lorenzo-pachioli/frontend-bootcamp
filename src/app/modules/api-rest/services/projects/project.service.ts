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
	private url = 'https://api-brainstorming.up.railway.app/projects';
	constructor(private readonly http: HttpClient) {
		this.projectsList$.subscribe(data => {
			this.projectsList = data;
		});
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
			return this.http.get(this.url)
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

	private deleteHttp(token: string, id: number): Observable<any> {
		if (token) {
			return this.http.delete(this.url + '/' + id);
		}
	}

	deleteProject(token: string, id: number): Promise<boolean> {
		return new Promise((resolve) => {
			this.deleteHttp(token, id).subscribe(projectResult => {
				if (projectResult.success) {
					const current = this.projectsList.filter(project => project.id !== projectResult.data.id);
					this.projectsList$.next(current);
					resolve(true);
				} else {
					resolve(false);
				}
			});
		});
	}
}
