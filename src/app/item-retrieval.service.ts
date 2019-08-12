import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import Item from './models/Item';
import { CookieService } from 'ngx-cookie-service';


interface Config {
  heroesUrl: string;
  textfile: string;
}

@Injectable({
  providedIn: 'root'
})
export class ItemRetrievalService {

  constructor(private http: HttpClient,private cookieService:CookieService) { }

  public getItems(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Basic '+this.cookieService.get('restaurant-auth'),
        'Content-Type': 'application/x-form-urlencoded'
      })
    };
    return this.http.get('https://qriomatrix-kafe.herokuapp.com/menuitem/all',httpOptions);
  }

  public saveItem(item:Item){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Basic '+this.cookieService.get('restaurant-auth'),
        'Content-Type': 'application/x-form-urlencoded'
      })
    };
    return this.http.post("https://qriomatrix-kafe.herokuapp.com/menuitem/save",item,httpOptions);
  }
}
