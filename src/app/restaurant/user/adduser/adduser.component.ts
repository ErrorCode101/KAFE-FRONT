import { Component, OnInit, OnChanges, ViewChild } from "@angular/core";
import {FormControl, Validators, NgForm} from '@angular/forms';
import { RestuarantCreateModel } from "app/models/restaurant/create/restuarant.create.model";

@Component({
    templateUrl: 'adduser.component.html',
    moduleId: module.id,
    styles: [`h3.sub-head{
                background-color: #eee;
                padding: 6px;
                margin: 8px 0px 0px 0px;
            }`]
})

export class AddUserComponent {


    @ViewChild('f', {static: false}) form: NgForm;

    restuarantModel: RestuarantCreateModel = new RestuarantCreateModel();
    hide:boolean = true;
    isLoading:boolean = false;

    constructor(){

    }

    onSubmitButtonClick(): void{
        if(this.form.valid){
            
        }
    }
}