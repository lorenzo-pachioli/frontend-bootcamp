import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		MatToolbarModule,
		MatSnackBarModule,
		MatCardModule,
		MatButtonModule,
		MatMenuModule,
		MatIconModule,
		MatProgressSpinnerModule,
		MatCheckboxModule,
		MatDialogModule,
		MatFormFieldModule,
		MatDatepickerModule
	],
	exports: [
		MatSnackBarModule,
		MatToolbarModule,
		MatCardModule,
		MatButtonModule,
		MatMenuModule,
		MatIconModule,
		MatProgressSpinnerModule,
		MatCheckboxModule,
		MatDialogModule,
		MatFormFieldModule,
		MatDatepickerModule
	]
})
export class MaterialModule {
}
