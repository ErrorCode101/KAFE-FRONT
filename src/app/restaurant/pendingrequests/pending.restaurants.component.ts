import { Component, OnInit } from "@angular/core";
import { PendingRestaurantsModel } from "app/models/restaurant/pending/pending.restaurants.model";
import { HttpService } from "app/services/https.service";
import { CommonService } from "app/services/common.service";
import { MatSnackBar } from "@angular/material";

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
        for(let i = 0;i < 20; i++)
        this.gridData.push({restaurantId: "1", restaurantName: "Test", 
        addressLine1: "TEST", addressLine2: "TEST", contactNumber: "TEST", city: "TEST", isdeleted : false, restaurantStatus: ""})
    }



    constructor(private httpService:HttpService,private commonService: CommonService, private snackBar: MatSnackBar){
        
    }

    private getPendingRequests(): void{
        let url: string = this.commonService.GetCoreServiceUrl() + "restaurant/allrestaurant/toBeApproved";
        this.isLoading = true;
        this.httpService.getData(url).then((res: PendingRestaurantsModel[]) => {
            if(res != null){
                this.gridData = res;
                
            }
            this.isLoading = false;
        }).catch(err => {
            console.error(err);
            this.isLoading = false;
        })
    }

    onAccept(data: PendingRestaurantsModel): void{
        let url: string = this.commonService.GetCoreServiceUrl() + "restaurant/update";
        this.isLoading = true;
        data.restaurantStatus = "ACTIVE";
        this.httpService.postData(url, data).then((res: PendingRestaurantsModel) => {
            if(res != null){
                console.log(res);
                this.getPendingRequests();
                this.snackBar.open("Restaurant has been accepted successfully..", "OK",
                {duration:2000});
            }
        }).catch(err => {
            console.error(err);
            this.snackBar.open("Oops...Something went wrong...", "OK",
            {duration:2000});
            this.isLoading = false;
        })
    }

    onReject(data: PendingRestaurantsModel): void{
        let url: string = this.commonService.GetCoreServiceUrl() + "restaurant/update";
        this.isLoading = true;
        data.restaurantStatus = "REJECT";
        this.httpService.postData(url, data).then((res: PendingRestaurantsModel) => {
            if(res != null){
                console.log(res);
                this.snackBar.open("Restaurant has been rejected successfully..", "OK",
                {duration:2000});
                this.getPendingRequests();
            }

        }).catch(err => {
            console.error(err);
            this.snackBar.open("Oops...Something went wrong...", "OK",
                {duration:2000});
            this.isLoading = false;
        })
    }
}