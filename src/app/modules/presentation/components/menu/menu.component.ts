import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from 'src/app/modules/api-rest/services/user/user.service';
import { IUser } from 'src/app/modules/core/interfaces/userInterface';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

	userLogged: IUser;
	@Input() menuState = false;
	@Output() menuStateChange: EventEmitter<boolean> = new EventEmitter();

	constructor(public user: UserService) {
		this.user.user$.subscribe(u => {
			this.userLogged = u;
		})
	}

	ngOnInit(): void {
	}

	setMenuState(): void {
		this.menuState = !this.menuState;
		this.menuStateChange.emit(this.menuState);
	}
}
