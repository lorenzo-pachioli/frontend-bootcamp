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

@Injectable()
export class ErrorHttpCatchInterceptor implements HttpInterceptor {

	constructor(private router: Router) { }

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		return next.handle(request).pipe(
			catchError((error: any) => {
				console.error('Error:', error);
				sessionStorage.removeItem('token');
				sessionStorage.removeItem('_id');
				this.router.navigate(['/login']);
				return throwError(error.statusText);
			})
		)
	}
}
