import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Item from './models/Item';
import { CommonService } from './services/common.service';
import { CookieService } from 'ngx-cookie-service';


interface Config {
  heroesUrl: string;
  textfile: string;
}

@Injectable({
  providedIn: 'root'
})
export class ItemRetrievalService {

  constructor(private http: HttpClient, private commonService:CommonService, private cookieService:CookieService) { }

  public getItems(){
    return this.http.get(this.commonService.GetCoreServiceUrl() + 'menuitem/all?access_token=' +
    this.cookieService.get('restaurant-auth'));
  }

  public saveItem(item:Item){
    return this.http.post(this.commonService.GetCoreServiceUrl() +'menuitem/save?access_token=' +
    this.cookieService.get('restaurant-auth')
    , item);
  }
}
