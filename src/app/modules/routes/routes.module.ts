import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './components/settings/settings.component';
import { MyProjectsComponent } from './components/my-projects/my-projects.component';
import { MyStoriesComponent } from './components/my-stories/my-stories.component';
import { HomeComponent } from './components/home/home.component';
import { NavigationService } from '../core/services/navigation/navigation.service';
import { UserService } from '../api-rest/services/user/user.service';
import { StoriesService } from '../api-rest/services/stories/stories.service';
import { ProjectService } from '../api-rest/services/projects/project.service';
import { MaterialModule } from '../material/material.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';



@NgModule({
	declarations: [
		HomeComponent,
		MyStoriesComponent,
		MyProjectsComponent,
		SettingsComponent
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
		HomeComponent,
		MyStoriesComponent,
		MyProjectsComponent,
		SettingsComponent
	],
	providers: [
		ProjectService,
		StoriesService,
		UserService,
		NavigationService
	]
})
export class RoutesModule { }
