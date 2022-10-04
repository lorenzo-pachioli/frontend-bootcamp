import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { HttpClientServiceMock } from 'src/app/test/mocks/services/http-client.service.mock';
import { MenuComponent } from './menu.component';

describe('MenuComponent', () => {
	let component: MenuComponent;
	let fixture: ComponentFixture<MenuComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [MenuComponent],
			providers: [
				{
					provide: HttpClient,
					useClass: HttpClientServiceMock
				}
			]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(MenuComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
