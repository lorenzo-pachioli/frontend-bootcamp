import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from './modules/core/services/language/language.service';
import { HealthCheckService } from './modules/api-rest/services/healthCheck/healthCheck.service';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	constructor(
		public translate: TranslateService, 
		private langService: LanguageService , 
		private readonly healthCheckService: HealthCheckService
	) {
		const DEFAULT_LANG = this.langService.initLang();
		this.translate.setDefaultLang(DEFAULT_LANG);
	}

	ngOnInit(): void {
		this.healthCheckService.wakeUp();
	}
}
