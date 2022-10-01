import { MaterialModule } from '../material/material.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LabelComponent } from './components/label/label.component';
import { MenuComponent } from './components/menu/menu.component';
import { AppRoutingModule } from '../../app-routing.module';
import { ProjectService } from '../api-rest/services/projects/project.service';
import { StoriesService } from '../api-rest/services/stories/stories.service';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserService } from '../api-rest/services/user/user.service';
import { NavigationService } from '../core/services/navigation/navigation.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AddTaskDialogComponent } from './components/add-task-dialog/add-task-dialog.component';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './components/doughnut-chart/doughnut-chart.component';
import { CardComponent } from './components/card/card.component';
import { CardListComponent } from './components/card-list/card-list.component';

@NgModule({
	declarations: [
		LabelComponent,
		MenuComponent,
		CardListComponent,
		CardComponent,
		DoughnutChartComponent,
		BarChartComponent,
		InfoCardComponent,
		ConfirmationDialogComponent,
		AddTaskDialogComponent
	],
	imports: [
		CommonModule,
		AppRoutingModule,
		MaterialModule,
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
		MenuComponent,
		CardListComponent,
		CardComponent,
		DoughnutChartComponent,
		BarChartComponent,
		InfoCardComponent,
		ConfirmationDialogComponent,
		AddTaskDialogComponent
	],
	providers: [
		ProjectService,
		StoriesService,
		UserService,
		NavigationService
	]
})
export class PresentationModule {
}
