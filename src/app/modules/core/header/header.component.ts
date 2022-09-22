import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

	headerTitle = '';
	pathValue = {
		id: 1,
		type: 1,
		url: '/',
		urlAfterRedirects: '/'
	};

	@Input() menuState = false;
	@Output() menuStateChange: EventEmitter<boolean> = new EventEmitter();

	constructor(public routerPath: Router) {
		routerPath.events.subscribe((event) => {
			if (event instanceof NavigationEnd) {
				this.pathValue = event,
					this.headerTitle = this.setHeader(this.pathValue.urlAfterRedirects)
			}
		});
	}

	ngOnInit(): void {

	}

	setMenuState(): void {
		this.menuState = !this.menuState;
	}

	setHeader(path: string): string {
		if (path === '/home') { return 'app.HEADER.HOME' }
		if (path === '/my-stories') { return 'app.HEADER.STORY' }
		if (path === '/my-projects') { return 'app.HEADER.PROJECT' }
		if (path === '/settings') { return 'app.HEADER.SETTINGS' }
	}

}
