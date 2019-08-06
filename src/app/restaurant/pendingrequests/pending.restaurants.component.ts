import { Component, OnInit } from "@angular/core";
import { PendingRestaurantsModel } from "app/models/restaurant/pending/pending.restaurants.model";

@Component({
    templateUrl: 'pending.restaurants.component.html',
    moduleId: module.id,
    styles: [`h3.sub-head{
                background-color: #eee;
                padding: 6px;
                margin: 8px 0px 0px 0px;
            }`]
})

export class PendingRestaurantComponent implements OnInit{

    hide:boolean = true;
    isLoading:boolean = false;
    gridData: PendingRestaurantsModel[] = [];
    displayedColumns: string[] = ["RestaurantId","RestaurantName","RestaurantAddress","RestaurantUser",
    "ButtonOne", "ButtonTwo"];

    ngOnInit(): void {
        //throw new Error("Method not implemented.");
    }

    constructor(){
        this.gridData.push(new PendingRestaurantsModel(),{RestaurantId: "1", RestaurantName: "Test", RestaurantAddress: "", RestaurantUser: ""})
    }
}