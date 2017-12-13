import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } 
from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginserService {
    headers: Headers;
    options: RequestOptions;yield

    constructor(private http: Http) {
        this.headers = new Headers({ 'Content-Type': 'application/json', 
                                    });
        this.options = new RequestOptions({ headers: this.headers });
    }

    //createService(url: string, param: any): Promise<any> {
    setUserLoggedIn(username: string, password: string): Promise<any> {
        debugger;
        let body = JSON.stringify({ username: username, password: password });
        return this.http
            .post('/login', body, this.options)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }  

    private extractData(res: Response) {
        return res.statusText || {};
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}