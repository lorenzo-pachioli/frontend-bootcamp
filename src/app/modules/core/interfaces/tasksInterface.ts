export interface ITasks {
	_id?: string,
	id: number,
	name: string,
	description?: string,
	story: string,   // object id
	created?: Date | string,
	dueDate?: Date | string,
	done?: boolean,
	_v?: number
}

export interface INewTasks {
	name: string,
	description: string,
	created: Date | string,
	story: string
}
