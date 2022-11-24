export interface IUser {
	_id?: string,
	id: number,
	email: string,
	username: string,
	password: string,
	name: {
		first: string,
		last: string
	},
	_v?: number
}

export interface INewUser {
	username: string,
	password: string,
	repeatPassword: string,
	email: string,
	name: {
		first: string,
		last: string
	}
}
