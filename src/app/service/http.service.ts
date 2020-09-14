import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class HttpService {
    fireBaseUrl = 'https://smart-kids-admin.firebaseio.com';

    constructor( private http: HttpClient ) { }

    postRequest( url: string, request: any ): Observable<any> {
        return this.http.post( this.fireBaseUrl + url, request );
    }

    getRequest( url: string, request: any ): Observable<any> {
        return this.http.get( this.fireBaseUrl + url, request );
    }
}
