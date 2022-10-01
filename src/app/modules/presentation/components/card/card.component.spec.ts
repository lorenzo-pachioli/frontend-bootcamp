import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '../../material/material.module';
import { DatePipe } from '@angular/common';
import { CardComponent } from './card.component';

describe('CardComponent', () => {
	let component: CardComponent;
	let fixture: ComponentFixture<CardComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				MaterialModule
			],
			declarations: [CardComponent],
			providers: [
				DatePipe
			]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(CardComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
