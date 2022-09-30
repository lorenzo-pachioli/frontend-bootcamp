import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardListComponent } from './card-list/card-list.component';
import { CardComponent } from './card/card.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { MaterialModule } from '../material/material.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { InfoCardComponent } from './info-card/info-card.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { AddTaskDialogComponent } from './add-task-dialog/add-task-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
	declarations: [
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
		MaterialModule,
		ReactiveFormsModule,
		MatFormFieldModule,
		MatInputModule,
		MatNativeDateModule,
		MatDatepickerModule,
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: (http: HttpClient) => new TranslateHttpLoader(http, './assets/i18n/', '.json'),
				deps: [HttpClient]
			}
		})
	],
	exports: [
		CardListComponent,
		CardComponent,
		DoughnutChartComponent,
		BarChartComponent,
		InfoCardComponent,
		ConfirmationDialogComponent,
		AddTaskDialogComponent
	]
})
export class SharedModule { }
