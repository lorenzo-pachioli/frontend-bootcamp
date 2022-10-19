import { Injectable } from '@angular/core';
import { ITasks, INewTasks } from 'src/app/modules/core/interfaces/tasksInterface';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class TasksService {

	tasksList: Array<ITasks>;
	public tasksList$: BehaviorSubject<Array<ITasks>> = new BehaviorSubject([]);
	private url = 'https://lamansys-tasks-fake-api.herokuapp.com/api/tasks';

	constructor(private readonly http: HttpClient) {
		this.tasksList$.subscribe(data => {
			this.tasksList = data;
		});
	}

	getTasksByStoryId(id: string): ITasks[] {
		const list = this.tasksList.filter(task => task.story === id);
		return list;
	}

	private updateHttp(token: string, id: number, task: ITasks): Observable<any> {
		if (token) {
			return this.http.patch(this.url + '/' + id, task);
		}
	}

	updateTask(token: string, id: number, task: ITasks): Promise<boolean> {
		return new Promise((resolve) => {
			this.updateHttp(token, id, task).subscribe(taskResult => {
				if (taskResult.success) {
					const current = this.tasksList.map(t => {
						if (t.id === taskResult.data.id) {
							return taskResult.data;
						}
						return t;
					});
					this.tasksList$.next(current);
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

	deleteTask(token: string, id: number): Promise<boolean> {
		return new Promise((resolve) => {
			this.deleteHttp(token, id).subscribe(taskResult => {
				if (taskResult.success) {
					const current = this.tasksList.filter(task => task.id !== taskResult.data.id);
					this.tasksList$.next(current);
					resolve(true);
				} else {
					resolve(false);
				}
			});
		});
	}

	addTask(token: string, task: INewTasks): Observable<any> {
		if (token) {
			return this.http.post(this.url, task);
		}
	}

	private fetchHttp(): Observable<any> {
		const token = sessionStorage.getItem('token');
		if (token) {
			return this.http.get(this.url);
		}
	}

	fetchTasks(): Promise<any> {
		return new Promise((resolve) => {
			this.fetchHttp().subscribe(taskResult => {
				if (taskResult.success) {
					this.tasksList$.next(taskResult.data);
					resolve(true);
				} else {
					resolve(false);
				}
			});
		});
	}
}
