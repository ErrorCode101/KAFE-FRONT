import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(public http: HttpClient) { }

  public login(userData: any){

    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Basic cXJpb21hdHJpeC1jbGllbnQ6cXJpb21hdHJpeC1zZWNyZXQ=',
        'Content-Type': 'application/x-form-urlencoded'
      })
    };
    
    return this.http.post("https://qriomatrix-kafe.herokuapp.com/oauth/token",userData,httpOptions);
  }
}
