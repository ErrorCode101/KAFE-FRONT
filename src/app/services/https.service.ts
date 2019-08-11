import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import 'rxjs/add/operator/toPromise';
import { CookieService } from "ngx-cookie-service";

@Injectable()
export class HttpService {


    constructor(private http: HttpClient, private cookieService: CookieService) { }


    get(dataUrl: string): Promise<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Basic cXJpb21hdHJpeC1jbGllbnQ6cXJpb21hdHJpeC1zZWNyZXQ='
            })
        };


        return this.http.get(dataUrl
            , httpOptions)
            .toPromise()
            .then((response: JSON) => response)
            .catch(this.handleError);
    }

    post(dataUrl: string, body: any): Promise<any> {

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Basic cXJpb21hdHJpeC1jbGllbnQ6cXJpb21hdHJpeC1zZWNyZXQ='
            })
        };

        return this.http.post(dataUrl
            , body, httpOptions)
            .toPromise()
            .then((response: JSON) => response)
            .catch(this.handleError);
    }
    getData(dataUrl: string): Promise<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + this.cookieService.get('restaurant-auth'),
                'acces_token': this.cookieService.get('restaurant-auth')
            })
        };


        return this.http.get(dataUrl + 'access_token=' + this.cookieService.get('restaurant-auth')
            , httpOptions)
            .toPromise()
            .then((response: JSON) => response)
            .catch(this.handleError);
    }

    postData(dataUrl: string, body: any): Promise<any> {

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + this.cookieService.get('restaurant-auth'),
                'acces_token': this.cookieService.get('restaurant-auth')
            })
        };

        return this.http.post(dataUrl + 'access_token=' + this.cookieService.get('restaurant-auth')
            , body, httpOptions)
            .toPromise()
            .then((response: JSON) => response)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
}