import { Injectable } from '@angular/core';
import { IEpic } from 'src/app/modules/core/interfaces/epicInterface';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class EpicService {

	private epicList: Array<IEpic>;
	public epicList$: BehaviorSubject<Array<IEpic>> = new BehaviorSubject([]);
	private url = 'https://lamansys-tasks-fake-api.herokuapp.com/api/epics';

	constructor(private readonly http: HttpClient) {
		this.epicList$.subscribe(data => {
			this.epicList = data;
		});
	}

	getEpics(): any {
		return this.epicList;
	}

	getOneEpic(id: number): IEpic | false {
		const epic = this.epicList.find(e => e.id === id);
		if (epic) {
			return epic;
		}
		return false;
	}

	getEpicsByProyectId(id: string): any {
		const list = this.epicList.filter(epic => epic.project === id);
		return list;
	}

	fetchEpics(token: string): Observable<any> {
		if (token) {
			return this.http.get(this.url, {
				headers: {
					auth: token
				}
			})
		}
	}
}
