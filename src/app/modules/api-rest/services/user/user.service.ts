import { Injectable } from '@angular/core';
import { IUser } from 'src/app/modules/core/interfaces/userInterface';

interface IUserLogIn {
	username: string,
	password: string
}
@Injectable({
	providedIn: 'root'
})
export class UserService {

	user: IUser;

	constructor() { }

	getUser(): IUser {
		return this.user;
	}

	setLogIn(user: IUserLogIn): boolean {
		this.user = {
			id: 1,
			email: 'someEmail@gamil.com',
			username: user.username,
			password: user.password,
			name: {
				first: 'firstName',
				last: 'lastName'
			}
		};
		return this.user ? true : false;
	}
}
