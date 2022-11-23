import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpicDeleteConfirmationComponent } from './epic-delete-confirmation.component';

describe('EpicDeleteConfirmationComponent', () => {
	let component: EpicDeleteConfirmationComponent;
	let fixture: ComponentFixture<EpicDeleteConfirmationComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [EpicDeleteConfirmationComponent]
		})
			.compileComponents();

		fixture = TestBed.createComponent(EpicDeleteConfirmationComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
