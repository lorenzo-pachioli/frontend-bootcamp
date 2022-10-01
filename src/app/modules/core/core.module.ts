import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { MaterialModule } from '../material/material.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PresentationModule } from '../presentation/presentation.module';
import { ApiRestModule } from '../api-rest/api-rest.module';
import { BackRouteDirective } from './directives/back-route/back-route.directive';


@NgModule({
	declarations: [
		HeaderComponent,
		FooterComponent,
		MainComponent,
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
		}),
		PresentationModule
	],
	exports: [
		HeaderComponent,
		FooterComponent,
		MainComponent,
		BackRouteDirective,
	]
})
export class CoreModule { }
