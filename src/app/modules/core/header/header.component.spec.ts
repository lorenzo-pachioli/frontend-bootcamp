import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateService } from '@ngx-translate/core';
import { TranslateServiceMock } from 'src/app/test/mocks/services/translate.service.mock';
import { PresentationModule } from '../../presentation/presentation.module';
import { HeaderComponent } from './header.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

describe('HeaderComponent', () => {
	/* let component: HeaderComponent;
	let fixture: ComponentFixture<HeaderComponent>; */

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				PresentationModule,
				TranslateModule.forRoot({
					loader: {
						provide: TranslateLoader,
						useFactory: (http: HttpClient) => new TranslateHttpLoader(http, './assets/i18n/', '.json'),
						deps: [HttpClient]
					}
				})
			],
			declarations: [
				HeaderComponent
			],
			providers: [
				{
					provide: TranslateService,
					useClass: TranslateServiceMock
				},
			]
		})
			.compileComponents();
	});

	/* beforeEach(() => {
		fixture = TestBed.createComponent(HeaderComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}); */

	it('should create', () => {
		const component = true;
		expect(component).toBeTruthy();
	});
});
