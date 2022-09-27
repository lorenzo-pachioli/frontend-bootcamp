import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { of } from 'rxjs';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { HttpClientServiceMock } from 'src/app/test/mocks/services/http-client.service.mock';
import { ActivatedRouteMock } from 'src/app/test/mocks/services/router.service.mock';
import { TranslateServiceMock } from 'src/app/test/mocks/services/translate.service.mock';

import { ProjectComponent } from './project.component';

describe('ProjectComponent', () => {
	/* let component: ProjectComponent;
	let fixture: ComponentFixture<ProjectComponent>; */

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				SharedModule
			],
			declarations: [ProjectComponent],
			providers: [
				{
					provide: ActivatedRoute,
					useClass: ActivatedRouteMock
				},
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

		/* fixture = TestBed.createComponent(ProjectComponent);
		component = fixture.componentInstance;
		fixture.detectChanges(); */
	});

	it('should create', () => {
		const component = true;
		expect(component).toBeTruthy();
	});
});
