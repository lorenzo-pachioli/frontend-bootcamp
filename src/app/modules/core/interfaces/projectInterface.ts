export interface IProject {
	_id?: string,
	id: number,
	name: string,
	members: Array<string>,   // object ids
	description?: string,
	icon?: string,
	_v?: number
}

export interface IProjectNum {
	name: string,
	total: number,
	completed: number
}
