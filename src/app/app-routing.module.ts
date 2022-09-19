import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/presentation/components/home/home.component';
import { MyProjectsComponent } from './modules/presentation/components/my-projects/my-projects.component';
import { MyStoriesComponent } from './modules/presentation/components/my-stories/my-stories.component';
import { SettingsComponent } from './modules/presentation/components/settings/settings.component';

const routes: Routes = [
	{ path: 'settings', component: SettingsComponent },
	{ path: 'my-projects', component: MyProjectsComponent },
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
