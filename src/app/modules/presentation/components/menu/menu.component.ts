import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUser } from 'src/app/modules/api-rest/services/interfaces/userInterface';
import { UserService } from 'src/app/modules/api-rest/services/user/user.service';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

	userLogged: IUser;
	@Input() menuState = false;
	@Output() menuStateChange: EventEmitter<boolean> = new EventEmitter();

	constructor(public user: UserService) { }

	ngOnInit(): void {
		this.userLogged = this.user.getUser();
	}

	setMenuState(): void {
		this.menuState = !this.menuState;
		this.menuStateChange.emit(this.menuState);
	}
}
