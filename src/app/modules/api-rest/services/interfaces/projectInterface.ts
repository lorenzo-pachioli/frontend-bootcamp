export interface IProject {
	id: number,
	name: string,
	members: Array<string>,   // object ids
	description?: string,
	icon?: string
}
