import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import 'rxjs/add/operator/toPromise';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      
    })
};

@Injectable()
export class HttpService{


    constructor(private http: HttpClient){}


    getData(dataUrl: string): Promise<any> {

        return this.http.get(dataUrl, httpOptions)
            .toPromise()
            .then((response:JSON) => response)
            .catch(this.handleError);
    }

    postData(dataUrl: string, body: any): Promise<any> {

        return this.http.post(dataUrl, body, httpOptions)
            .toPromise()
            .then((response:JSON) => response)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }

}