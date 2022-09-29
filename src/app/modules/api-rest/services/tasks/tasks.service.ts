import { Injectable } from '@angular/core';
import { ITasks } from '../interfaces/tasksInterface';

@Injectable({
	providedIn: 'root'
})
export class TasksService {

	tasksMock: Array<ITasks> = [
		{
			done: false,
			id: 1,
			name: 'Task 1',
			description: 'This is task #1',
			story: '1',
			created: '2022-04-10T21:59:24.063Z',
			dueDate: '2022-02-07T21:44:50.568Z'
		},
		{
			done: true,
			id: 2,
			name: 'Task 2',
			description: 'This is task #2',
			story: '2',
			created: '2022-04-10T21:59:24.063Z',
			dueDate: '2022-02-07T21:44:50.568Z'
		},
		{
			done: false,
			id: 3,
			name: 'Task 3',
			description: 'This is task #3',
			story: '3',
			created: '2022-04-10T21:59:24.063Z',
			dueDate: '2022-02-07T21:44:50.568Z'
		}
	]

	constructor() { }

	getTasks(): ITasks[] {
		return this.tasksMock;
	}

	getTasksByStoryId(id: number): ITasks[] {
		const list = this.tasksMock.filter(task => task.story === id.toString());
		return list;
	}

	updateTask(task: ITasks): boolean {
		this.tasksMock = this.tasksMock.map(t => {
			if (t.id === task.id) {
				return task;
			}
			return t;
		});
		return true;
	}

	deleteTask(id: number): boolean {
		this.tasksMock = this.tasksMock.filter(task => task.id !== id);
		return true;
	}
}
