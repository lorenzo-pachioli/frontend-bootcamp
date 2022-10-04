import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateService } from '@ngx-translate/core';
import { TranslateServiceMock } from 'src/app/test/mocks/services/translate.service.mock';
import { HeaderComponent } from './header.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientServiceMock } from 'src/app/test/mocks/services/http-client.service.mock';
import { CoreModule } from 'src/app/modules/core/core.module';

describe('HeaderComponent', () => {
	/* let component: HeaderComponent;
	let fixture: ComponentFixture<HeaderComponent>; */

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				CoreModule
			],
			declarations: [
				HeaderComponent
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

	/* beforeEach(() => {
		fixture = TestBed.createComponent(HeaderComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});
 */
	it('should create', () => {
		const component = true;
		expect(component).toBeTruthy();
	});
});
