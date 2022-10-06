import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/modules/api-rest/services/user/user.service';
import { IUser } from 'src/app/modules/core/interfaces/userInterface';

@Component({
	selector: 'app-settings',
	templateUrl: './settings.component.html',
	styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

	user: IUser;
	constructor(private router: Router, private userService: UserService) {
		this.userService.user$.subscribe(u => this.user = u)
	}

	ngOnInit(): void {
	}

	logOut(): void {
		sessionStorage.removeItem('token');
		sessionStorage.removeItem('_id');
		this.router.navigate(['/login']);
	}

}
