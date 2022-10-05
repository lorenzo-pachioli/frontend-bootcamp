import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUser } from 'src/app/modules/core/interfaces/userInterface';
import { HttpClient } from '@angular/common/http';

interface IUserLogIn {
	username: string,
	password: string
}
@Injectable({
	providedIn: 'root'
})
export class UserService {

	public user: IUser;
	public user$: BehaviorSubject<IUser> = new BehaviorSubject({
		id: 1,
		email: '',
		username: '',
		password: '',
		name: {
			first: '',
			last: ''
		}
	})
	private url = 'https://lamansys-tasks-fake-api.herokuapp.com/api/users/';
	constructor(private readonly http: HttpClient) {
	}

	getUser(): IUser {
		return this.user;
	}

	setUser(user: any): boolean {
		this.user$.next(user);
		this.user = user;
		return true;
	}

	private fetchHttp(id: string, token: string): Observable<any> {
		return this.http.get(this.url + id, {
			headers: {
				auth: token
			}
		})
	}

	fetchUser(id: string): Promise<any> {
		const token = sessionStorage.getItem('token');
		return new Promise((resolve) => {
			this.fetchHttp(id, token).subscribe(userResult => {
				console.log(userResult)
				if (userResult.id) {
					this.user$.next(userResult);
					resolve(true);
				} else {
					resolve(false);
				}
			});
		});
	}
}
