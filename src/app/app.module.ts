import { registerLocaleData } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import localeEsAr from '@angular/common/locales/es-AR';
import { LOCALE_ID, NgModule } from '@angular/core';
import { CoreModule } from './modules/core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PresentationModule } from './modules/presentation/presentation.module';
import { DatePipe } from '@angular/common';
import { RoutesModule } from './modules/routes/routes.module';


registerLocaleData(localeEsAr, 'en-US');

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		AppRoutingModule,
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: (http: HttpClient) => new TranslateHttpLoader(http, './assets/i18n/', '.json'),
				deps: [HttpClient]
			}
		}),
		PresentationModule,
		CoreModule,
		RoutesModule
	],
	providers: [
		{ provide: LOCALE_ID, useValue: 'en-US' },
		DatePipe
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
