import { MaterialModule } from '../material/material.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LabelComponent } from './components/label/label.component';
import { HomeComponent } from './components/home/home.component';
import { MyStoriesComponent } from './components/my-stories/my-stories.component';
import { MyProjectsComponent } from './components/my-projects/my-projects.component';
import { SettingsComponent } from './components/settings/settings.component';
import { MenuComponent } from './components/menu/menu.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../../app-routing.module';
import { ProjectService } from '../api-rest/services/projects/project.service';
import { StoriesService } from '../api-rest/services/stories/stories.service';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@NgModule({
	declarations: [
		LabelComponent,
		HomeComponent,
		MyStoriesComponent,
		MyProjectsComponent,
		SettingsComponent,
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
		}),
	],
	exports: [
		HomeComponent,
		MyStoriesComponent,
		MyProjectsComponent,
		SettingsComponent,
		MenuComponent
	],
	providers: [
		ProjectService,
		StoriesService
	]
})
export class PresentationModule {
}
