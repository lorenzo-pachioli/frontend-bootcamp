import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateService } from '@ngx-translate/core';
import { TranslateServiceMock } from 'src/app/test/mocks/services/translate.service.mock';
import { MainComponent } from './main.component';

describe('MainComponent', () => {
	let component: MainComponent;
	let fixture: ComponentFixture<MainComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [
				MainComponent
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

	beforeEach(() => {
		fixture = TestBed.createComponent(MainComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
