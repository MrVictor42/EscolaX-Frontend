import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	
	userBaseAPI : string = environment.apiURL + 'user';
	loginBase : string = environment.apiURL + 'login';
	jwtHelper : JwtHelperService = new JwtHelperService();

	constructor(private http : HttpClient) {

	}

	logout() : void {
		localStorage.removeItem("access_token");
	}

	getToken() : any {
		const tokenString = localStorage.getItem("access_token")

		if(tokenString) {
			const token = JSON.parse(tokenString).access_token
			return token;
		} else {
			return null;
		}
	}

	getAuthenticatedUser() : any {
		const token = this.getToken();

		if(token) {
			const user = this.jwtHelper.decodeToken(token).username;
			return user;
		} else {
			return null;
		}
	}

	isAuthenticated() : boolean {
		const token = this.getToken();

		if(token) {
			const expired = this.jwtHelper.isTokenExpired(token);
			return !expired;
		}
		return false;
	}

	login(username : string, password: string) : Observable<any> {
		const params = new HttpParams().set("username", username).set("password", password);
		const headers = {
			"Content-Type" : "application/x-www-form-urlencoded"
		};
		console.log(params.toString())

		return this.http.post(this.loginBase, params.toString(), { headers });
	}
}