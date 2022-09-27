import { convertToParamMap } from '@angular/router';
import { Observable, of } from 'rxjs';

export class ActivatedRouteMock {
	public snapshot = {
		paramMap: of(convertToParamMap({
			testId: 'abc123',
			anotherId: 'd31e8b48-7309-4c83-9884-4142efdf7271',
		}))
	};
}
