import { Injectable } from '@angular/core';
import { IProject } from '../interfaces/projectInterface';

@Injectable({
	providedIn: 'root'
})
export class ProjectService {

	projectsMock: Array<IProject> = [
		{
			members: [],
			name: 'Project 1',
			description: 'This is my first project',
			icon: null,
			id: 1
		},
		{
			members: [],
			name: 'Project 2',
			description: 'This is my second project',
			icon: null,
			id: 2
		},
		{
			members: [],
			name: 'Project 3',
			description: 'This is my third project',
			icon: null,
			id: 3
		}
	]

	constructor() { }

	getProjects(): IProject[] {
		return this.projectsMock;
	}
}
