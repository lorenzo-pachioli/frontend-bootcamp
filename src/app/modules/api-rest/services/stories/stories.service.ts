import { Injectable } from '@angular/core';
import { IStory } from '../interfaces/storyInterface';

@Injectable({
	providedIn: 'root'
})
export class StoriesService {

	storiesMock: Array<IStory> = [
		{
			assignedTo: [],
			points: 5,
			status: 'done',
			id: 1,
			name: 'US #1',
			description: 'Lorem ipsum',
			epic: '1',
			created: '2022-02-07T21:44:26.346Z',
		},
		{
			assignedTo: [],
			points: 5,
			status: 'done',
			id: 2,
			name: 'US #2',
			description: 'Lorem ipsum',
			epic: '2',
			created: '2022-02-07T21:44:26.346Z',
		},
		{
			assignedTo: [],
			points: 5,
			status: 'done',
			id: 3,
			name: 'US #3',
			description: 'Lorem ipsum',
			epic: '3',
			created: '2022-02-07T21:44:26.346Z',
		},
		{
			assignedTo: [],
			points: 5,
			status: 'done',
			id: 1,
			name: 'US #1',
			description: 'Lorem ipsum',
			epic: '1',
			created: '2022-02-07T21:44:26.346Z',
		},
		{
			assignedTo: [],
			points: 5,
			status: 'done',
			id: 2,
			name: 'US #2',
			description: 'Lorem ipsum',
			epic: '2',
			created: '2022-02-07T21:44:26.346Z',
		},
		{
			assignedTo: [],
			points: 5,
			status: 'done',
			id: 3,
			name: 'US #3',
			description: 'Lorem ipsum',
			epic: '3',
			created: '2022-02-07T21:44:26.346Z',
		}
	]

	constructor() { }

	getStories(): IStory[] {
		return this.storiesMock;
	}
}
