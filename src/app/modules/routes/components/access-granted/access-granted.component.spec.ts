import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ComponentsModule } from 'src/app/modules/components/components.module';
import { PresentationModule } from 'src/app/modules/presentation/presentation.module';

import { AccessGrantedComponent } from './access-granted.component';

describe('AccessGrantedComponent', () => {
	let component: AccessGrantedComponent;
	let fixture: ComponentFixture<AccessGrantedComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				PresentationModule,
				ComponentsModule,
				AppRoutingModule
			],
			declarations: [AccessGrantedComponent]
		})
			.compileComponents();

		fixture = TestBed.createComponent(AccessGrantedComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
