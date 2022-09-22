export interface ITasks {
	id: number,
	name: string,
	description?: string,
	story: string,   // object id
	created?: Date | string,
	dueDate?: Date | string,
	done?: boolean
}
