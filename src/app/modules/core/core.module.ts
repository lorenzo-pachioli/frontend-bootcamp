import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PresentationModule } from '../presentation/presentation.module';
import { ApiRestModule } from '../api-rest/api-rest.module';
import { BackRouteDirective } from './directives/back-route/back-route.directive';


@NgModule({
	declarations: [
		BackRouteDirective
	],
	imports: [
		CommonModule,
		MaterialModule,
		ApiRestModule,
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: (http: HttpClient) => new TranslateHttpLoader(http, './assets/i18n/', '.json'),
				deps: [HttpClient]
			}
		})
	],
	exports: [
		BackRouteDirective,
		MaterialModule
	]
})
export class CoreModule { }
