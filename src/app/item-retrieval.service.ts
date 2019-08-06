import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Item from './models/Item';


interface Config {
  heroesUrl: string;
  textfile: string;
}

@Injectable({
  providedIn: 'root'
})
export class ItemRetrievalService {

  constructor(private http: HttpClient) { }

  public getItems(){
    return this.http.get('http://localhost:8080/menuitem/all');
  }

  public saveItem(item:Item){
    return this.http.post("http://localhost:8080/menuitem/save",item);
  }
}
