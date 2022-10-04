import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { HttpClientServiceMock } from 'src/app/test/mocks/services/http-client.service.mock';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from 'src/app/modules/core/core.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('LoginComponent', () => {
	let component: LoginComponent;
	let fixture: ComponentFixture<LoginComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				ReactiveFormsModule,
				CoreModule,
				NoopAnimationsModule
			],
			declarations: [LoginComponent],
			providers: [
				{
					provide: HttpClient,
					useClass: HttpClientServiceMock
				}
			]
		})
			.compileComponents();

		fixture = TestBed.createComponent(LoginComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
