import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { MyProjectsComponent } from './my-projects.component';

describe('MyProjectsComponent ', () => {
	let component: MyProjectsComponent;
	let fixture: ComponentFixture<MyProjectsComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				SharedModule
			],
			declarations: [
				MyProjectsComponent
			]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(MyProjectsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
