import { Component, OnInit, OnChanges, ViewChild } from "@angular/core";
import {FormControl, Validators, NgForm} from '@angular/forms';
import { UserCreateDTO } from "app/models/user/user.create.model";

@Component({
    templateUrl: 'adduser.component.html',
    selector: 'add-user',
    moduleId: module.id,
    styles: [`h3.sub-head{
                background-color: #eee;
                padding: 6px;
                margin: 8px 0px 0px 0px;
            }`]
})

export class AddUserComponent {

    @ViewChild('f', {static: false}) form: NgForm;

    userModel: UserCreateDTO = new UserCreateDTO();
    hide:boolean = true;
    isLoading:boolean = false;

    constructor(){

    }

    onSubmitButtonClick(): void{
        if(this.form.valid){
            
        }
    }
}