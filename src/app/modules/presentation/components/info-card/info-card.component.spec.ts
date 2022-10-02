import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DatePipe } from '@angular/common';
import { InfoCardComponent } from './info-card.component';
import { CoreModule } from 'src/app/modules/core/core.module';

describe('InfoCardComponent', () => {
	let component: InfoCardComponent;
	let fixture: ComponentFixture<InfoCardComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				CoreModule
			],
			declarations: [InfoCardComponent],
			providers: [DatePipe]
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
