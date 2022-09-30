export interface IEpic {
	id: number,
	project: string,   // object id
	name: string,
	description?: string,
	icon?: string
}

export interface IEpicNum {
	project: string,
	total: number,
	completed: number
}
