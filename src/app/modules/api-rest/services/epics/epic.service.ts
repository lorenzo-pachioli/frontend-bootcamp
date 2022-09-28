import { Injectable } from '@angular/core';
import { IEpic } from '../interfaces/epicInterface';

@Injectable({
	providedIn: 'root'
})
export class EpicService {

	epicList = [
		{
			id: 1,
			project: '3',
			name: 'Epic 1',
			description: 'This is the first Epic for Project 3',
			icon: '🥁'
		},
		{
			id: 2,
			project: '3',
			name: 'Epic 2',
			description: 'This is the second Epic for Project 2',
			icon: '🥁'
		},
		{
			id: 3,
			project: '1',
			name: 'Epic 3',
			description: 'This is the third Epic for Project 1',
			icon: '🥁'
		}
	];

	constructor() { }

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

	getEpicsByProyectId(id: number): any {
		const list = this.epicList.filter(epic => epic.project === id.toString());
		return list;
	}
}
