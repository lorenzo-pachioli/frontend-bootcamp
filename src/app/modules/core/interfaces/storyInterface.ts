export interface IStory {
	_id?: string,
	id: number,
	name: string,
	description?: string,
	epic: string,   // object id
	owner?: string,   // object id
	assignedTo?: Array<string>,   // object id
	points?: 0 | 1 | 2 | 3 | 4 | 5,
	created?: string,
	due?: string,
	started?: string,
	finished?: string,
	status?: 'todo' | 'running' | 'done',
	icon?: string,
	_v?: number
}
