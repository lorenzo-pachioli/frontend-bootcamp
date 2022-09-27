import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NavigationService } from '../../api-rest/services/navigation/navigation.service';
@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

	headerTitle = '';
	url = {
		path: '',
		projectName: '',
		epicName: '',
		storyName: ''
	}

	@Input() menuState = false;
	@Output() menuStateChange: EventEmitter<boolean> = new EventEmitter();

	constructor(private navigation: NavigationService) {
		this.navigation.url.subscribe(sub => {
			this.url.path = sub.path
			this.url.projectName = sub.projectName
			this.url.epicName = sub.epicName
			this.url.storyName = sub.storyName
			this.setHeader();
		});
	}

	ngOnInit(): void {
	}

	setMenuState(): void {
		this.menuState = !this.menuState;
	}

	setHeader(): any {
		if (this.url.projectName.length > 0) {
			return this.headerTitle = this.url.projectName;
		}
		if (this.url.path === 'home') { return this.headerTitle = 'app.HEADER.HOME' }
		if (this.url.path === 'my-stories') { return this.headerTitle = 'app.HEADER.STORY' }
		if (this.url.path === 'my-projects') { return this.headerTitle = 'app.HEADER.PROJECT' }
		if (this.url.path === 'settings') { return this.headerTitle = 'app.HEADER.SETTINGS' }
	}
}
