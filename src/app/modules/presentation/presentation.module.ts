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
import { UserService } from '../api-rest/services/user/user.service';
import { ProjectComponent } from './subcomponents/project/project.component';
import { ProjectListComponent } from './subcomponents/project-list/project-list.component';
import { EpicComponent } from './subcomponents/epic/epic.component';
import { StoryComponent } from './subcomponents/story/story.component';

@NgModule({
	declarations: [
		LabelComponent,
		HomeComponent,
		MyStoriesComponent,
		MyProjectsComponent,
		SettingsComponent,
		MenuComponent,
		ProjectComponent,
		ProjectListComponent,
		EpicComponent,
  StoryComponent
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
		SettingsComponent,
		MenuComponent,
		EpicComponent
	],
	providers: [
		ProjectService,
		StoriesService,
		UserService
	]
})
export class PresentationModule {
}
