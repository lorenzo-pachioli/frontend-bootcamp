import { MaterialModule } from './../material/material.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LabelComponent } from './components/label/label.component';
import { HomeComponent } from './components/home/home.component';
import { MyStoriesComponent } from './components/my-stories/my-stories.component';
import { MyProyectsComponent } from './components/my-proyects/my-proyects.component';
import { SettingsComponent } from './components/settings/settings.component';
import { MenuComponent } from './components/menu/menu.component';


@NgModule({
	declarations: [
	LabelComponent,
	HomeComponent,
	MyStoriesComponent,
	MyProyectsComponent,
	SettingsComponent,
	MenuComponent],
	imports: [
		CommonModule,
		FlexLayoutModule,
	],
	exports: [
		FlexLayoutModule,
	]
})
export class PresentationModule {
}
