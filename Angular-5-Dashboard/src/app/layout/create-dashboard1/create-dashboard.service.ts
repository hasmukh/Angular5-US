import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CreateDashboardService {

    constructor(private httpClient: HttpClient) { }
    static url = 'http://jsonplaceholder.typicode.com/posts/1';

    getDashboardSettings(): Observable<Object> {
        return this.httpClient.get(CreateDashboardService.url);
    }
}
