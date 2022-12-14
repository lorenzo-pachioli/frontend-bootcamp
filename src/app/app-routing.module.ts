import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EpicComponent } from './modules/components/components/epic/epic.component';
import { ProjectListComponent } from './modules/components/components/project-list/project-list.component';
import { ProjectComponent } from './modules/components/components/project/project.component';
import { StoryListComponent } from './modules/components/components/story-list/story-list.component';
import { StoryComponent } from './modules/components/components/story/story.component';
import { UserExistGuard } from './modules/core/guards/user-exist.guard';
import { AccessGrantedComponent } from './modules/routes/components/access-granted/access-granted.component';
import { HomeComponent } from './modules/routes/components/home/home.component';
import { LoadingPageComponent } from './modules/routes/components/loading-page/loading-page.component';
import { LoginComponent } from './modules/routes/components/login/login.component';
import { MyProjectsComponent } from './modules/routes/components/my-projects/my-projects.component';
import { MyStoriesComponent } from './modules/routes/components/my-stories/my-stories.component';
import { NotFoundComponent } from './modules/routes/components/not-found/not-found.component';
import { SettingsComponent } from './modules/routes/components/settings/settings.component';
import { SignUpComponent } from './modules/routes/components/sign-up/sign-up.component';

const routes: Routes = [
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: 'signup',
		component: SignUpComponent
	},
	{
		path: '',
		component: AccessGrantedComponent,
		canActivate: [UserExistGuard],
		children: [
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
			{
				path: 'my-stories',
				component: MyStoriesComponent,
				children: [
					{ path: ':storyId', component: StoryComponent },
					{ path: '', component: StoryListComponent, pathMatch: 'full' }
				]
			},
			{ path: 'home', component: HomeComponent },
			{ path: '', redirectTo: '/loading', pathMatch: 'full' }
		]
	},
	{ path: 'loading', component: LoadingPageComponent, pathMatch: 'full' },
	{ path: 'not-found', component: NotFoundComponent, pathMatch: 'full' },
	{ path: '**', redirectTo: '/not-found' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
