import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { CoreModule } from 'src/app/modules/core/core.module';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';

describe('ConfirmationDialogComponent', () => {
	let component: ConfirmationDialogComponent;
	let fixture: ComponentFixture<ConfirmationDialogComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				CoreModule
			],
			declarations: [ConfirmationDialogComponent],
			providers: [
				{ provide: MatDialogRef, useValue: {} },
				{ provide: MatDialog, useValue: {} }]
		})
			.compileComponents();

		fixture = TestBed.createComponent(ConfirmationDialogComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
