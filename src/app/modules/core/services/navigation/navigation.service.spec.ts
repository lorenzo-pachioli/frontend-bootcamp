import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { NavigationService } from './navigation.service';
import { HttpClientServiceMock } from 'src/app/test/mocks/services/http-client.service.mock';

describe('NavigationService', () => {
	let service: NavigationService;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			providers: [
				{
					provide: HttpClient,
					useClass: HttpClientServiceMock
				}
			]
		});
		service = TestBed.inject(NavigationService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
