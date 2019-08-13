import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import Item from './models/Item';
import { CookieService } from 'ngx-cookie-service';
import { CommonService } from './services/common.service';
import { MatSnackBar } from '@angular/material';


interface Config {
  heroesUrl: string;
  textfile: string;
}

@Injectable({
  providedIn: 'root'
})
export class ItemRetrievalService {

  constructor(private http: HttpClient,private cookieService:CookieService, private commonService:CommonService,
    private snackBar: MatSnackBar) { }

  public getItems(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Basic '+this.cookieService.get('restaurant-auth'),
        'Content-Type': 'application/json'
      })
    };
    return this.http.get(this.commonService.GetCoreServiceUrl()+'menuitem/all?access_token='+this.cookieService.get('restaurant-auth'),
    httpOptions);
  }

  public saveItem(item:Item){
    return this.http.post(this.commonService.GetCoreServiceUrl() +'menuitem/create?access_token=' +
    this.cookieService.get('restaurant-auth')
    , item);
  }

  public deleteItem(item:Item){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Basic '+this.cookieService.get('restaurant-auth'),
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(this.commonService.GetCoreServiceUrl() +'menuitem/delete?id='+item.id +'&access_token=' +
    this.cookieService.get('restaurant-auth')
    , item, httpOptions);
  }


}
