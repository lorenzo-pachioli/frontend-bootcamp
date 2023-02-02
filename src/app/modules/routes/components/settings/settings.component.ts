import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/modules/api-rest/services/user/user.service';
import { IUser } from 'src/app/modules/core/interfaces/userInterface';

@Component({
	selector: 'app-settings',
	templateUrl: './settings.component.html',
	styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit, OnDestroy {

	user: IUser;
	language = localStorage.getItem('lang');
	userSubscription: Subscription;

	constructor(
		private router: Router,
		private userService: UserService,
		public translate: TranslateService
	) {
		this.userSubscription = this.userService.user$.subscribe(u => this.user = u)
	}

	ngOnInit(): void {
	}

	ngOnDestroy(): void {
		this.userSubscription.unsubscribe();
	}

	logOut(): void {
		sessionStorage.removeItem('token');
		sessionStorage.removeItem('_id');
		this.router.navigate(['/login']);
	}

	setLang(lang: string): void {
		this.language = lang;
		this.translate.setDefaultLang(lang);
		localStorage.setItem('lang', lang);
	}
}
