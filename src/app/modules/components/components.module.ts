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
import { AddTaskDialogComponent } from './components/add-task-dialog/add-task-dialog.component';
import { HeaderComponent } from './components/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProjectInfoCardComponent } from './components/project-info-card/project-info-card.component';
import { StoryInfoCardComponent } from './components/story-info-card/story-info-card.component';
import { AddStoryDialogComponent } from './components/add-story-dialog/add-story-dialog.component';



@NgModule({
	declarations: [
		ProjectComponent,
		ProjectListComponent,
		EpicComponent,
		StoryComponent,
		StoryCardComponent,
		TaskCardComponent,
		AddTaskDialogComponent,
		HeaderComponent,
		ProjectInfoCardComponent,
		StoryInfoCardComponent,
		AddStoryDialogComponent
	],
	imports: [
		CommonModule,
		PresentationModule,
		AppRoutingModule,
		CoreModule,
		ReactiveFormsModule,
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
		TaskCardComponent,
		AddTaskDialogComponent,
		HeaderComponent,
		ProjectInfoCardComponent,
		StoryInfoCardComponent,
		AddStoryDialogComponent
	]
})
export class ComponentsModule { }
