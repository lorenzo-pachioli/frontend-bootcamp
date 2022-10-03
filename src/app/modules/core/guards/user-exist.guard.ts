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
		console.log(user);
		if (!user) {
			this.router.navigate(['/login']);
			return false;
		}

		return true;
	}

}
