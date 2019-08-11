import { Component, OnInit, OnChanges, ViewChild } from "@angular/core";
import {FormControl, Validators, NgForm} from '@angular/forms';
import { RestuarantCreateModel } from "app/models/restaurant/create/restuarant.create.model";
import { HttpService } from "app/services/https.service";
import { MatDialog, MatSnackBar } from "@angular/material";
import { CommonService } from "app/services/common.service";

@Component({
    templateUrl: 'create.restaurant.component.html',
    moduleId: module.id,
    styles: [`h3.sub-head{
                background-color: #eee;
                padding: 6px;
                margin: 8px 0px 0px 0px;
            }`]
})

export class CreateRestaurantComponent {


    @ViewChild('f', {static: false}) form: NgForm;

    restuarantModel: RestuarantCreateModel = new RestuarantCreateModel();
    hide:boolean = true;
    isLoading:boolean = false;

    constructor(private httpService:HttpService,private commonService: CommonService, private snackBar: MatSnackBar){

    }

    onSubmitButtonClick(): void{
        if(this.form.valid){
            this.isLoading = true;
            
            let url: string = this.commonService.GetCoreServiceUrl() + "restaurant/init";

            this.httpService.post(url, this.restuarantModel).then(res => {
                this.snackBar.open("Your application successfully submitted to be approved...", "OK",
                {duration:4000});
                this.form.resetForm();
                this.isLoading = false;
            }).catch(err => {
                console.error(err);
                this.snackBar.open("Ooops... something went wrong...", "OK",
                {duration:2000});
                this.isLoading = false;
            });
        }
    }

    
}