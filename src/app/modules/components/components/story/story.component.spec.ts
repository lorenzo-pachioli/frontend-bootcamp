import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { StoryComponent } from './story.component';
import { DatePipe } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateServiceMock } from 'src/app/test/mocks/services/translate.service.mock';
import { HttpClientServiceMock } from 'src/app/test/mocks/services/http-client.service.mock';
import { ComponentsModule } from '../../components.module';

describe('StoryComponent', () => {
	let component: StoryComponent;
	let fixture: ComponentFixture<StoryComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				ComponentsModule
			],
			declarations: [StoryComponent],
			providers: [
				{ provide: MatDialog, useValue: {} },
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

		fixture = TestBed.createComponent(StoryComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
