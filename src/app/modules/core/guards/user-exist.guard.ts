import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ProjectService } from '../../api-rest/services/projects/project.service';
import { UserService } from '../../api-rest/services/user/user.service';

@Injectable({
	providedIn: 'root'
})
export class UserExistGuard implements CanActivate {

	constructor(private userService: UserService, private projectService: ProjectService, private router: Router) { }

	OnDestroy(): void {
		this.projectService.projecLoaded$.unsubscribe();
	}
	async canActivate(): Promise<boolean> {
		const user = this.userService.getUser();
		const token = sessionStorage.getItem('token');
		const id = sessionStorage.getItem('_id');
		if (!user && token && id) {
			const data = await this.initData(id, token)
			if (data) {
				return true;
			} else {
				this.router.navigate(['/login']);
				return false;
			}
		} else if (user && token && id) {
			return true;
		} else {
			this.router.navigate(['/login']);
			return false;
		}
	}

	initData(id: string, token: string): Promise<any> {
		return new Promise((resolve) => {
			this.userService.fetchUser(id, token).subscribe(response => {
				if (response._id) {
					this.userService.setUser(response);
					this.projectService.fetchProjects(token).subscribe(res => {
						if (res.success) {
							this.projectService.projectsMock$.next(res.data)
							resolve(true);
						} else {
							resolve(false);
						}
					});
				} else {
					resolve(false);
				}
			});
		});
	}
}
