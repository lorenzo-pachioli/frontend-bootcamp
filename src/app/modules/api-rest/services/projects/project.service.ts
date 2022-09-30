import { Injectable } from '@angular/core';
import { IProject } from 'src/app/modules/core/interfaces/projectInterface';

@Injectable({
	providedIn: 'root'
})
export class ProjectService {

	projectsMock: Array<IProject> = [
		{
			members: [],
			name: 'Project 1',
			description: 'This is my first project',
			icon: 'rgba(255, 99, 132, 1)',
			id: 1
		},
		{
			members: [],
			name: 'Project 2',
			description: 'This is my second project',
			icon: 'rgba(255, 205, 86, 1)',
			id: 2
		},
		{
			members: [],
			name: 'Project 3',
			description: 'This is my third project',
			icon: 'rgba(54, 162, 235, 1)',
			id: 3
		}
	]

	constructor() { }

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
}
