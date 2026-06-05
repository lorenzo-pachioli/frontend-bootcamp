import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';

interface HealthResponse {
    message: string;
}

@Injectable({
	providedIn: 'root'
})
export class HealthCheckService {

	private url = environment.API + 'health';

	constructor(
		private readonly http: HttpClient
	) { }

    wakeUp(): void {
        console.log("> API Health Check...");
        this.http.get<HealthResponse>(this.url).subscribe((res) => {
            console.log("> API Health Check response ->", res.message);
        });
    }
}