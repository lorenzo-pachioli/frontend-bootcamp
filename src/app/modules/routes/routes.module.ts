import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProjectsComponent } from './components/my-projects/my-projects.component';
import { MyStoriesComponent } from './components/my-stories/my-stories.component';
import { HomeComponent } from './components/home/home.component';
import { NavigationService } from '../core/services/navigation/navigation.service';
import { UserService } from '../api-rest/services/user/user.service';
import { StoriesService } from '../api-rest/services/stories/stories.service';
import { ProjectService } from '../api-rest/services/projects/project.service';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SettingsComponent } from './components/settings/settings.component';
import { ComponentsModule } from '../components/components.module';
import { PresentationModule } from '../presentation/presentation.module';
import { CoreModule } from '../core/core.module';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AccessGrantedComponent } from './components/access-granted/access-granted.component';
import { LoadingPageComponent } from './components/loading-page/loading-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';



@NgModule({
	declarations: [
		HomeComponent,
		MyStoriesComponent,
		MyProjectsComponent,
		SettingsComponent,
		LoginComponent,
		AccessGrantedComponent,
		LoadingPageComponent,
		NotFoundComponent
	],
	imports: [
		CommonModule,
		PresentationModule,
		AppRoutingModule,
		ReactiveFormsModule,
		CoreModule,
		ComponentsModule,
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
		LoginComponent,
		AccessGrantedComponent,
		NotFoundComponent
	],
	providers: [
		ProjectService,
		StoriesService,
		UserService,
		NavigationService
	]
})
export class RoutesModule { }
