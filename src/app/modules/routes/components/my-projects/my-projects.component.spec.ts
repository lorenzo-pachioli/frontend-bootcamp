import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyProjectsComponent } from './my-projects.component';
import { TranslateService } from '@ngx-translate/core';
import { TranslateServiceMock } from 'src/app/test/mocks/services/translate.service.mock';
import { HttpClient } from '@angular/common/http';
import { HttpClientServiceMock } from 'src/app/test/mocks/services/http-client.service.mock';
import { RouterTestingModule } from '@angular/router/testing';
import { PresentationModule } from 'src/app/modules/presentation/presentation.module';
import { CoreModule } from 'src/app/modules/core/core.module';

describe('MyProjectsComponent ', () => {
	let component: MyProjectsComponent;
	let fixture: ComponentFixture<MyProjectsComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				PresentationModule,
				RouterTestingModule,
				CoreModule
			],
			declarations: [
				MyProjectsComponent
			],
			providers: [
				{
					provide: TranslateService,
					useClass: TranslateServiceMock
				},
				{
					provide: HttpClient,
					useClass: HttpClientServiceMock
				}
			]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(MyProjectsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
