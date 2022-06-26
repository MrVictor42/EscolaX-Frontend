import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	tokenURL : string = environment.baseURL + "login";

	constructor(private http: HttpClient) {

	}

	login(username: string, password: string): Observable<any> {
		const params =
			new HttpParams()
				.set("username", username)
				.set("password", password)
				.set("grant_type", "password");
		// const headers = {
		// 	"Authorization": "Basic " + btoa(`${this.clientId}:${this.clientSecret}`),
		// 	"Content-Type": "application/x-www-form-urlencoded"
		// };

		return this.http.post(this.tokenURL, params.toString());
		// return this.http.post(this.tokenURL, params.toString(), { headers });
	}
}