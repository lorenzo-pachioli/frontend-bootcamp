import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

const DEFAULT_LANG = 'en-US';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	constructor(public translate: TranslateService) {
		this.translate.setDefaultLang(DEFAULT_LANG)
	}

}
