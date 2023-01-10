import { Injectable } from '@angular/core';
import {
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../presentation/components/error-dialog/error-dialog.component';

@Injectable()
export class ErrorHttpCatchInterceptor implements HttpInterceptor {

	constructor(public dialog: MatDialog) { }

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		return next.handle(request).pipe(
			catchError((error: any) => {
				console.error('Error:', error);
				this.dialog.open(ErrorDialogComponent, {
					width: '400px',
					data: { title: 'Error', content: 'Uppsss! Something went wrong, try again later' }
				});
				return throwError(error.statusText);
			})
		)
	}
}
