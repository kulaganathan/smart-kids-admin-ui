import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CourseDetailService {
    fireBaseUrl = 'https://smart-kids-admin.firebaseio.com/courseDetail.json';

    constructor( private httpClient: HttpClient ) { }

    postCourseDetails( payload: any ): Observable<any> {
        return this.httpClient.post( this.fireBaseUrl, payload );
    }
}
