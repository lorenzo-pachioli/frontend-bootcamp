export interface IUser {
	id: number,
	email: string,
	username: string,
	password: string,
	name: {
		first: string,
		last: string
	}
}
