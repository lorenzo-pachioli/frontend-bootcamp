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

	setLogIn(user: IUserLogIn): Observable<any> {
		return this.http.post(this.url, user);
	}

}
