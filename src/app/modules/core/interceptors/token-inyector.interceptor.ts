import { Injectable } from '@angular/core';
import {
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class TokenInyectorInterceptor implements HttpInterceptor {

	constructor() { }

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		const token = sessionStorage.getItem('token');
		if (token) {
			request = request.clone({
				setHeaders: {
					auth: token
				}
			});
		}
		return next.handle(request).pipe(
			catchError((error: any) => {
				console.error('Error:', error);
				return throwError(error.statusText);
			})
		)
	}
}
