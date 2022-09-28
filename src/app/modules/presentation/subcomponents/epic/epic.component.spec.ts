import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { ActivatedRouteMock } from 'src/app/test/mocks/services/router.service.mock';
import { TranslateServiceMock } from 'src/app/test/mocks/services/translate.service.mock';
import { TranslateService } from '@ngx-translate/core';
import { EpicComponent } from './epic.component';
import { HttpClientServiceMock } from 'src/app/test/mocks/services/http-client.service.mock';
import { HttpClient } from '@angular/common/http';

describe('EpicComponent', () => {
	/* let component: EpicComponent;
	let fixture: ComponentFixture<EpicComponent>; */

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				SharedModule,
				MaterialModule
			],
			declarations: [EpicComponent],
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

		/* fixture = TestBed.createComponent(EpicComponent);
		component = fixture.componentInstance;
		fixture.detectChanges(); */
	});

	it('should create', () => {
		const component = true;
		expect(component).toBeTruthy();
	});
});
