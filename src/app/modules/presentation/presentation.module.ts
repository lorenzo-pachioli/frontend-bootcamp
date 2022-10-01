import { MaterialModule } from '../material/material.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LabelComponent } from './components/label/label.component';
import { MenuComponent } from './components/menu/menu.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../../app-routing.module';
import { ProjectService } from '../api-rest/services/projects/project.service';
import { StoriesService } from '../api-rest/services/stories/stories.service';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserService } from '../api-rest/services/user/user.service';
import { NavigationService } from '../core/services/navigation/navigation.service';

@NgModule({
	declarations: [
		LabelComponent,
		MenuComponent
	],
	imports: [
		CommonModule,
		SharedModule,
		AppRoutingModule,
		MaterialModule,
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: (http: HttpClient) => new TranslateHttpLoader(http, './assets/i18n/', '.json'),
				deps: [HttpClient]
			}
		})
	],
	exports: [
		MenuComponent
	],
	providers: [
		ProjectService,
		StoriesService,
		UserService,
		NavigationService
	]
})
export class PresentationModule {
}
