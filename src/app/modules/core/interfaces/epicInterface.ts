export interface IEpic {
	_id?: string,
	id: number,
	project: string,   // object id
	name: string,
	description?: string,
	icon?: string,
	_v?: number
}

export interface IEpicNum {
	project: string,
	total: number,
	completed: number
}

export interface INewEpic {
	name: string,
	description: string,
	project: string
}
