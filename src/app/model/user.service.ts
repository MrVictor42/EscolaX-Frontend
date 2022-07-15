import { Injectable } from '@angular/core';

import { User } from './user';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class UserService {

	userBaseAPI: string = environment.apiURL + 'user';

	constructor(private http: HttpClient) {

	}

	userList() : Observable<User[]> {
		return this.http.get<User[]>(`${ this.userBaseAPI }/list`);
	}

	update(user: User, formData : FormData | undefined): Observable<any> {

		if(formData == undefined) {
			return this.http.put<User>(`${this.userBaseAPI}/update`, user);
		} else {
			this.http.put<User>(`${this.userBaseAPI}/update`, user);
			return this.http.put(`${this.userBaseAPI}/update/photo/${ user.id }`, formData, { responseType: 'blob' });
		}
	}
}
