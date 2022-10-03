import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	hide = true;
	username = new FormControl('', Validators.minLength(4));
	password = new FormControl('', Validators.minLength(4));
	login = new FormGroup({
		username: this.username,
		password: this.password
	});

	constructor() { }

	ngOnInit(): void {
	}

}
