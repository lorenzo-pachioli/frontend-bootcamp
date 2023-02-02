import { OnDestroy } from '@angular/core';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { INewUser, IUser } from 'src/app/modules/core/interfaces/userInterface';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';

@Injectable({
	providedIn: 'root'
})
export class UserService implements OnDestroy {

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
	public usersList = [];
	private url = environment.API + 'users/';

	constructor(private readonly http: HttpClient) { }

	ngOnDestroy(): void {
		this.user$.unsubscribe();
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
				if (userResult.success) {
					this.user$.next(userResult.data);
					resolve(true);
				} else {
					resolve(false);
				}
			});
		});
	}

	private fetchAllUsersHttp(): Observable<any> {
		const token = sessionStorage.getItem('token');
		return this.http.get(this.url, {
			headers: {
				auth: token
			}
		})
	}

	fetchAllUsers(): Promise<any> {
		return new Promise((resolve) => {
			this.fetchAllUsersHttp().subscribe(usersResult => {
				if (usersResult.success) {
					this.usersList = usersResult.data;
					resolve(true);
				} else {
					resolve(false);
				}
			});
		});
	}

	getUserById(id: string): IUser | false {
		if (this.usersList.length > 0) {
			return this.usersList.find(user => user._id === id)
		}
		return false;
	}

	private fetchCreateUserHttp(newUser: INewUser): Observable<any> {
		return this.http.post(this.url, newUser);
	}

	createUser(newUser: any): Promise<any> {
		return new Promise((resolve) => {
			this.fetchCreateUserHttp(newUser).subscribe(usersResult => {
				if (usersResult.success) {
					resolve(true);
				} else {
					resolve(false);
				}
			});
		});
	}
}
