import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

	@Input() menuState = false;
	@Output() menuStateChange: EventEmitter<boolean> = new EventEmitter();

	constructor() { }

	ngOnInit(): void {
	}

	setMenuState(): void {
		this.menuState = !this.menuState;
		this.menuStateChange.emit(this.menuState);
	}
}
