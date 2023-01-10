import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from './modules/core/services/language/language.service';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	constructor(public translate: TranslateService, private langService: LanguageService) {
		const DEFAULT_LANG = this.langService.initLang();
		this.translate.setDefaultLang(DEFAULT_LANG);
	}
}
