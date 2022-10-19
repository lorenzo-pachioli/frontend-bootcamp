import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DatePipe } from '@angular/common';
import { StoryInfoCardComponent } from './story-info-card.component';
import { ApiRestModule } from 'src/app/modules/api-rest/api-rest.module';
import { CoreModule } from 'src/app/modules/core/core.module';

describe('StoryInfoCardComponent', () => {
	let component: StoryInfoCardComponent;
	let fixture: ComponentFixture<StoryInfoCardComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				ApiRestModule,
				CoreModule
			],
			declarations: [StoryInfoCardComponent],
			providers: [DatePipe]
		})
			.compileComponents();

		fixture = TestBed.createComponent(StoryInfoCardComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
