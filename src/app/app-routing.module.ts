import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EpicComponent } from './modules/components/components/epic/epic.component';
import { ProjectListComponent } from './modules/components/components/project-list/project-list.component';
import { ProjectComponent } from './modules/components/components/project/project.component';
import { StoryComponent } from './modules/components/components/story/story.component';
import { HomeComponent } from './modules/routes/components/home/home.component';
import { LoginComponent } from './modules/routes/components/login/login.component';
import { MyProjectsComponent } from './modules/routes/components/my-projects/my-projects.component';
import { MyStoriesComponent } from './modules/routes/components/my-stories/my-stories.component';
import { SettingsComponent } from './modules/routes/components/settings/settings.component';

const routes: Routes = [
	{ path: 'settings', component: SettingsComponent },
	{
		path: 'my-projects',
		component: MyProjectsComponent,
		children: [
			{ path: ':prjectId/:epicId/:storyId', component: StoryComponent },
			{ path: ':prjectId/:epicId', component: EpicComponent },
			{ path: ':prjectId', component: ProjectComponent, pathMatch: 'full' },
			{ path: '', component: ProjectListComponent, pathMatch: 'full' }
		],
	},
	{ path: 'my-stories', component: MyStoriesComponent },
	{ path: 'home', component: HomeComponent },
	{ path: 'login', component: LoginComponent },
	{ path: '', redirectTo: '/login', pathMatch: 'full' },
	{ path: '**', redirectTo: '/home' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
