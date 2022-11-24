import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/api-rest/services/auth/auth.service';
import { UserService } from 'src/app/modules/api-rest/services/user/user.service';

@Component({
	selector: 'app-sign-up',
	templateUrl: './sign-up.component.html',
	styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

	hide = true;
	loading = false;
	validUser = true;
	error = false;
	firstName = new FormControl('', Validators.minLength(4));
	lastName = new FormControl('', Validators.minLength(4));
	username = new FormControl('', Validators.minLength(4));
	password = new FormControl('', Validators.minLength(4));
	repeatPassword = new FormControl('', this.validatePassword(this.password));
	email = new FormControl('', Validators.email);
	signUp = new FormGroup({
		username: this.username,
		password: this.password,
		repeatPassword: this.repeatPassword,
		email: this.email,
		name: new FormGroup({
			first: this.firstName,
			last: this.lastName
		})
	});

	constructor(
		private userService: UserService,
		private router: Router
	) { }

	ngOnInit(): void {
	}

	logIn(): void {

		this.loading = true;
		this.validUser = true;

		const data = {
			username: this.signUp.value.username,
			password: this.signUp.value.password,
			email: this.signUp.value.email,
			name: {
				first: this.signUp.value.name.first,
				last: this.signUp.value.name.last
			}
		}

		this.userService.createUser(data)
			.then(response => {
				if (response.success) {
					this.router.navigate(['/login']);
				} else {
					this.validUser = false;
				}
			})
			.catch(() => {
				this.error = true;
			})
	}

	private validatePassword(pass: any): ValidatorFn {
		return (control: AbstractControl): ValidationErrors | null => {
			const forbidden = control.value !== pass.value;
			return forbidden ? { forbiddenPassword: { value: control.value } } : null;
		};
	}
}
