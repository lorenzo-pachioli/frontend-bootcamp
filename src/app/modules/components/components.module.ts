import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { StoryComponent } from './components/story/story.component';
import { EpicComponent } from './components/epic/epic.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ProjectComponent } from './components/project/project.component';
import { PresentationModule } from '../presentation/presentation.module';
import { CoreModule } from '../core/core.module';
import { TaskCardComponent } from './components/task-card/task-card.component';
import { StoryCardComponent } from './components/story-card/story-card.component';



@NgModule({
	declarations: [
		ProjectComponent,
		ProjectListComponent,
		EpicComponent,
		StoryComponent,
		StoryCardComponent,
		TaskCardComponent
	],
	imports: [
		CommonModule,
		PresentationModule,
		AppRoutingModule,
		CoreModule,
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: (http: HttpClient) => new TranslateHttpLoader(http, './assets/i18n/', '.json'),
				deps: [HttpClient]
			}
		})
	],
	exports: [
		ProjectComponent,
		ProjectListComponent,
		EpicComponent,
		StoryComponent,
		StoryCardComponent,
		TaskCardComponent
	]
})
export class ComponentsModule { }
