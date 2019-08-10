import { Component, OnInit } from "@angular/core";
import { PendingRestaurantsModel } from "app/models/restaurant/pending/pending.restaurants.model";
import { HttpService } from "app/services/https.service";
import { CommonService } from "app/services/common.service";

@Component({
    templateUrl: 'pending.restaurants.component.html',
    selector: 'pending-requests',
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
        this.getPendingRequests();
        this.gridData.push({restaurantId: "1", restaurantName: "Test", 
        addressLine1: "TEST", addressLine2: "TEST", contactNumber: "TEST", city: "TEST", isdeleted : false, restaurantStatus: ""})
    }



    constructor(private httpService:HttpService,private commonService: CommonService){
        
    }

    private getPendingRequests(): void{
        let url: string = this.commonService.GetCoreServiceUrl() + "restaurant/allrestaurant/toBeApproved";

        this.httpService.getData(url).then((res: PendingRestaurantsModel[]) => {
            if(res != null){
                this.gridData = res;
            }

        }).catch(err => {
            console.error(err);
        })
    }

    onAccept(data: PendingRestaurantsModel): void{
        let url: string = this.commonService.GetCoreServiceUrl() + "restaurant/update";

        data.restaurantStatus = "ACTIVE";
        this.httpService.postData(url, data).then((res: PendingRestaurantsModel) => {
            if(res != null){
                console.log(res);
            }

        }).catch(err => {
            console.error(err);
        })
    }

    onReject(data: PendingRestaurantsModel): void{
        let url: string = this.commonService.GetCoreServiceUrl() + "restaurant/update";

        data.restaurantStatus = "REJECT";
        this.httpService.postData(url, data).then((res: PendingRestaurantsModel) => {
            if(res != null){
                console.log(res);
            }

        }).catch(err => {
            console.error(err);
        })
    }
}