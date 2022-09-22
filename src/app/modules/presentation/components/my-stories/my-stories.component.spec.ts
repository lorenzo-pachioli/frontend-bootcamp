import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { TranslateService } from '@ngx-translate/core';
import { MyStoriesComponent } from './my-stories.component';
import { TranslateServiceMock } from 'src/app/test/mocks/services/translate.service.mock';

describe('MyStoriesComponent', () => {
	let component: MyStoriesComponent;
	let fixture: ComponentFixture<MyStoriesComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				SharedModule
			],
			declarations: [
				MyStoriesComponent
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
