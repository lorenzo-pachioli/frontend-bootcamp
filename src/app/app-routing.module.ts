import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/presentation/components/home/home.component';
import { MyProjectsComponent } from './modules/presentation/components/my-projects/my-projects.component';
import { MyStoriesComponent } from './modules/presentation/components/my-stories/my-stories.component';
import { SettingsComponent } from './modules/presentation/components/settings/settings.component';
import { EpicComponent } from './modules/presentation/subcomponents/epic/epic.component';
import { ProjectListComponent } from './modules/presentation/subcomponents/project-list/project-list.component';
import { ProjectComponent } from './modules/presentation/subcomponents/project/project.component';

const routes: Routes = [
	{ path: 'settings', component: SettingsComponent },
	{
		path: 'my-projects',
		component: MyProjectsComponent,
		children: [
			{ path: ':prjectId/:id', component: EpicComponent },
			{ path: ':prjectId', component: ProjectComponent, pathMatch: 'full' },
			{ path: '', component: ProjectListComponent, pathMatch: 'full' }
		],
	},
	{ path: 'my-stories', component: MyStoriesComponent },
	{ path: 'home', component: HomeComponent },
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: '**', redirectTo: '/home' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
