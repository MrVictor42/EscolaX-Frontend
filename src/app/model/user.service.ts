import { Injectable } from '@angular/core';

import { User } from './user';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class UserService {

	userBaseAPI: string = environment.apiURL + 'user';

	constructor(private http: HttpClient) {

	}

	userList(): Observable<User[]> {
		return this.http.get<User[]>(`${this.userBaseAPI}/list`);
	}

	update(user: User, formData: FormData | undefined): Observable<any> {

		if (formData == undefined) {
			return this.http.put(`${this.userBaseAPI}/update`, user);
		} else {
			return this.http.put(`${this.userBaseAPI}/update/${user.registration}/photo`, formData, { responseType: 'blob' });
		}
	}

	changePassword(user : User,password: string): Observable<User> {
		return this.http.put(`${ this.userBaseAPI }/update/password/${ user.registration }/new_password`, password);
	}
}
