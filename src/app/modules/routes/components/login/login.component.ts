import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/api-rest/services/auth/auth.service';
import { UserService } from 'src/app/modules/api-rest/services/user/user.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	hide = true;
	loading = false;
	validUser = true;
	error = false;
	username = new FormControl('', Validators.minLength(4));
	password = new FormControl('', Validators.minLength(4));
	login = new FormGroup({
		username: this.username,
		password: this.password
	});

	constructor(
		private authService: AuthService,
		private userService: UserService,
		private router: Router
	) { }

	ngOnInit(): void {
	}

	logIn(): void {
		this.loading = true;
		this.validUser = true;
		const data = {
			username: this.login.value.username,
			password: this.login.value.password
		}
		this.authService.setLogIn(data)
			.then(response => {
				this.loading = false;
				if (response.success) {
					this.userService.setUser(response.user);
					this.router.navigate(['/loading']);
				} else {
					this.validUser = false;
				}
			})
			.catch(() => {
				this.error = true;
				this.loading = false;
			})
	}
}
