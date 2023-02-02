import { OnDestroy } from '@angular/core';
import { Injectable } from '@angular/core';
import { IEpic, INewEpic } from 'src/app/modules/core/interfaces/epicInterface';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';

@Injectable({
	providedIn: 'root'
})
export class EpicService implements OnDestroy {

	public epicList: Array<IEpic>;
	public epicList$: BehaviorSubject<Array<IEpic>> = new BehaviorSubject([]);
	private url = environment.API + 'epics/';

	constructor(private readonly http: HttpClient) {
		this.epicList$.subscribe(data => {
			this.epicList = data;
		});
	}

	ngOnDestroy(): void {
		this.epicList$.unsubscribe();
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

	private fetchHttp(token: string): Observable<any> {
		if (token) {
			return this.http.get(this.url)
		}
	}

	fetchEpics(): Promise<any> {
		const token = sessionStorage.getItem('token');
		return new Promise((resolve) => {
			this.fetchHttp(token).subscribe(epicResult => {
				if (epicResult.success) {
					this.epicList$.next(epicResult.data);
					resolve(true);
				} else {
					resolve(false);
				}
			});
		});
	}

	addEpic(token: string, epic: INewEpic): Observable<any> {
		if (token) {
			return this.http.post(this.url, epic);
		}
	}

	private deleteHttp(token: string, id: number): Observable<any> {
		if (token) {
			return this.http.delete(this.url + '/' + id);
		}
	}

	deleteEpic(token: string, id: number): Promise<boolean> {
		return new Promise((resolve) => {
			this.deleteHttp(token, id).subscribe(epicResult => {
				if (epicResult.success) {
					const current = this.epicList.filter(epic => epic.id !== epicResult.data.id);
					this.epicList$.next(current);
					resolve(true);
				} else {
					resolve(false);
				}
			});
		});
	}
}
