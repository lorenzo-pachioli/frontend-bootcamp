import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../../api-rest/services/user/user.service';

@Injectable({
	providedIn: 'root'
})
export class UserExistGuard implements CanActivate {

	constructor(private userService: UserService, private router: Router) { }

	canActivate(): boolean {
		const user = this.userService.getUser();
		const token = sessionStorage.getItem('token');
		const id = sessionStorage.getItem('_id');
		if (!user && token && id) {
			this.userService.fetchUser(id, token).subscribe(response => {
				console.log('id', response._id);
				if (response._id) {
					const d = this.userService.setUser(response);
					console.log('d', d);
					return d
				}
				this.router.navigate(['/login']);
				return false;
			})
		} else if (user && token && id) {
			console.log('t', true);
			return true;
		} else {
			this.router.navigate(['/login']);
			return false;
		}
	}
}
