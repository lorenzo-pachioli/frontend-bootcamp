import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/userInterface';

@Injectable({
	providedIn: 'root'
})
export class UserService {

	user: IUser = {
		id: 1,
		email: 'someEmail@gamil.com',
		username: 'someUserName',
		password: 123456,
		name: {
			first: 'firstName',
			last: 'lastName'
		}
	}

	constructor() { }

	getUser(): IUser {
		return this.user;
	}
}
