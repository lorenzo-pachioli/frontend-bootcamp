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
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './components/doughnut-chart/doughnut-chart.component';
import { CardComponent } from './components/card/card.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { CoreModule } from '../core/core.module';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';

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
		MainComponent,
		FooterComponent,
		ErrorDialogComponent
	],
	imports: [
		CommonModule,
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
		MenuComponent,
		CardListComponent,
		CardComponent,
		DoughnutChartComponent,
		BarChartComponent,
		InfoCardComponent,
		ConfirmationDialogComponent,
		MainComponent,
		FooterComponent,
		ErrorDialogComponent
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
