import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DatePipe } from '@angular/common';
import { StoryCardComponent } from './story-card.component';
import { ApiRestModule } from 'src/app/modules/api-rest/api-rest.module';
import { CoreModule } from 'src/app/modules/core/core.module';

describe('StoryCardComponent', () => {
	let component: StoryCardComponent;
	let fixture: ComponentFixture<StoryCardComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				ApiRestModule,
				CoreModule
			],
			declarations: [StoryCardComponent],
			providers: [DatePipe]
		})
			.compileComponents();

		fixture = TestBed.createComponent(StoryCardComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
