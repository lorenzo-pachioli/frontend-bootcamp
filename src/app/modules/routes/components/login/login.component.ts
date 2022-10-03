import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/modules/api-rest/services/user/user.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	hide = true;
	validUser = true;
	username = new FormControl('', Validators.minLength(4));
	password = new FormControl('', Validators.minLength(4));
	login = new FormGroup({
		username: this.username,
		password: this.password
	});

	constructor(private userService: UserService, private router: Router) { }

	ngOnInit(): void {
	}

	logIn(): void {
		this.validUser = true;
		const data = {
			username: this.login.value.username,
			password: this.login.value.password
		}
		const user = this.userService.setLogIn(data);
		if (user) {
			this.router.navigate(['/home']);
		} else {
			this.validUser = false;
		}
	}

}
