import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '../../material/material.module';

import { InfoCardComponent } from './info-card.component';

describe('InfoCardComponent', () => {
	let component: InfoCardComponent;
	let fixture: ComponentFixture<InfoCardComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				MaterialModule
			],
			declarations: [InfoCardComponent]
		})
			.compileComponents();

		fixture = TestBed.createComponent(InfoCardComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});