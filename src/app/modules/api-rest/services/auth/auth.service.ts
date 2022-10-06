import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface IUserLogIn {
	username: string,
	password: string
}

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	private token = sessionStorage.getItem('token');
	private url = 'https://lamansys-tasks-fake-api.herokuapp.com/api/login';
	constructor(
		private readonly http: HttpClient
	) { }

	getToken(): string {
		return this.token;
	}

	setLogIn(user: IUserLogIn): Promise<any> {
		return new Promise((resolve) => {
			this.http.post(this.url, user).subscribe((logInResult: any) => {
				if (logInResult.success) {
					sessionStorage.setItem('token', logInResult.token);
					sessionStorage.setItem('_id', logInResult.user._id);
					resolve(logInResult);
				} else {
					resolve(false);
				}
			});
		});
	}

}
