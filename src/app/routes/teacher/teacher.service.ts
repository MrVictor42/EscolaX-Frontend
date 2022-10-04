import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Teacher } from 'src/app/model/teacher';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class TeacherService {

	teacherBaseAPI: string = environment.apiURL + 'teacher';

    constructor(private http: HttpClient) {

    }

    save(teacher : Teacher) : Observable<Teacher> {
        return this.http.post<Teacher>(`${ this.teacherBaseAPI }/save`, teacher);
    }
}
