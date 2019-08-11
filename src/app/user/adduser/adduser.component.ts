import { Component, OnInit, OnChanges, ViewChild } from "@angular/core";
import { FormControl, Validators, NgForm } from '@angular/forms';
import { UserCreateDTO } from "app/models/user/user.create.model";
import { trigger, transition, style, animate } from "@angular/animations";
import { CommonService } from "app/services/common.service";
import { HttpService } from "app/services/https.service";
import { MatSnackBar } from "@angular/material";

@Component({
    templateUrl: 'adduser.component.html',
    selector: 'add-user',
    moduleId: module.id,
    styles: [`h3.sub-head{
                background-color: #eee;
                padding: 6px;
                margin: 8px 0px 0px 0px;
            }`],
})

export class AddUserComponent {

    @ViewChild('f', { static: false }) form: NgForm;

    userModel: UserCreateDTO = new UserCreateDTO();
    hide: boolean = true;
    isLoading: boolean = false;

    constructor(private commonService:CommonService,private httpService:HttpService, private snackBar: MatSnackBar) {

    }

    onSubmitButtonClick(): void{
        if(this.form.valid){
            this.isLoading = true;
            
            let url: string = this.commonService.GetCoreServiceUrl() + "user/create?";

            this.httpService.postData(url, this.userModel).then(res => {
                this.snackBar.open("User has been added successfully..", "OK",
                {duration:2000});
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