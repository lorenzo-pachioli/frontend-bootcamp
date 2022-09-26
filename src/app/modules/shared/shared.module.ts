import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardListComponent } from './card-list/card-list.component';
import { CardComponent } from './card/card.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
	declarations: [
		CardListComponent,
		CardComponent,
		DoughnutChartComponent,
		BarChartComponent
	],
	imports: [
		CommonModule,
		MaterialModule
	],
	exports: [
		CardListComponent,
		CardComponent,
		DoughnutChartComponent,
		BarChartComponent
	]
})
export class SharedModule { }
