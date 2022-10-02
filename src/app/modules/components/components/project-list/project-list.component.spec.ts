import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateService } from '@ngx-translate/core';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { HttpClientServiceMock } from 'src/app/test/mocks/services/http-client.service.mock';
import { TranslateServiceMock } from 'src/app/test/mocks/services/translate.service.mock';
import { DatePipe } from '@angular/common';
import { ProjectListComponent } from './project-list.component';
import { PresentationModule } from 'src/app/modules/presentation/presentation.module';

describe('ProjectListComponent', () => {
	let component: ProjectListComponent;
	let fixture: ComponentFixture<ProjectListComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				PresentationModule,
				RouterTestingModule,
				MaterialModule
			],
			declarations: [ProjectListComponent],
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

		fixture = TestBed.createComponent(ProjectListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
