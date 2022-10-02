import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateService } from '@ngx-translate/core';
import { MyStoriesComponent } from './my-stories.component';
import { TranslateServiceMock } from 'src/app/test/mocks/services/translate.service.mock';
import { HttpClientServiceMock } from 'src/app/test/mocks/services/http-client.service.mock';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { PresentationModule } from 'src/app/modules/presentation/presentation.module';

describe('MyStoriesComponent', () => {
	let component: MyStoriesComponent;
	let fixture: ComponentFixture<MyStoriesComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				PresentationModule
			],
			declarations: [
				MyStoriesComponent
			],
			providers: [
				{
					provide: TranslateService,
					useClass: TranslateServiceMock
				},
				{
					provide: HttpClient,
					useClass: HttpClientServiceMock
				},
				DatePipe
			]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(MyStoriesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
