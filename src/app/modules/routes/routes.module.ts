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
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { CoreModule } from '../core/core.module';



@NgModule({
	declarations: [
		HomeComponent,
		MyStoriesComponent,
		MyProjectsComponent,
		SettingsComponent,
		HeaderComponent,
		MainComponent,
		FooterComponent
	],
	imports: [
		CommonModule,
		PresentationModule,
		AppRoutingModule,
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
		HeaderComponent,
		MainComponent,
		FooterComponent
	],
	providers: [
		ProjectService,
		StoriesService,
		UserService,
		NavigationService
	]
})
export class RoutesModule { }
