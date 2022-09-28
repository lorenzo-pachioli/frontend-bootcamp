import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUrl } from '../../api-rest/services/interfaces/urlInterface';
import { NavigationService } from '../../api-rest/services/navigation/navigation.service';
@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

	headerTitle = '';
	headerTitle2 = '';
	url: IUrl = {
		path: '',
		project: false,
		epic: false,
		story: false
	}

	@Input() menuState = false;
	@Output() menuStateChange: EventEmitter<boolean> = new EventEmitter();

	constructor(private navigation: NavigationService) {
		this.navigation.url.subscribe(sub => {
			this.url.path = sub.path
			this.url.project = sub.project
			this.url.epic = sub.epic
			this.url.story = sub.story
			console.log(this.url);
			this.setHeader();
		});
	}

	ngOnInit(): void {
	}

	setMenuState(): void {
		this.menuState = !this.menuState;
	}

	setHeader(): any {
		if (this.url.epic) {
			this.headerTitle2 = this.url.epic.name;
		}
		if (this.url.project) {
			return this.headerTitle = this.url.project.name;
		}
		if (this.url.path === 'home') { return this.headerTitle = 'app.HEADER.HOME' }
		if (this.url.path === 'my-stories') { return this.headerTitle = 'app.HEADER.STORY' }
		if (this.url.path === 'my-projects') { return this.headerTitle = 'app.HEADER.PROJECT' }
		if (this.url.path === 'settings') { return this.headerTitle = 'app.HEADER.SETTINGS' }
	}
}
