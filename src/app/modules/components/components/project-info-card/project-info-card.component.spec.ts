import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DatePipe } from '@angular/common';
import { ProjectInfoCardComponent } from './project-info-card.component';
import { ApiRestModule } from 'src/app/modules/api-rest/api-rest.module';
import { CoreModule } from 'src/app/modules/core/core.module';

describe('ProjectInfoCardComponent', () => {
	let component: ProjectInfoCardComponent;
	let fixture: ComponentFixture<ProjectInfoCardComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				ApiRestModule,
				CoreModule
			],
			declarations: [ProjectInfoCardComponent],
			providers: [DatePipe]
		})
			.compileComponents();

		fixture = TestBed.createComponent(ProjectInfoCardComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
