export interface IUser {
	id: number,
	email: string,
	username: string,
	password: number,
	name: {
		first: string,
		last: string
	}
}
