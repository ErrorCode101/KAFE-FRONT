import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormControl, Validators, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import {AuthenticationService} from '../authentication.service';
import {CookieService} from 'ngx-cookie-service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loginForm;

  constructor(private cookieService: CookieService, private authenticationService: AuthenticationService, private formBuilder: FormBuilder) {

      this.loginForm = this.formBuilder.group({
        userName:"",
        password:""
      })
   }

  ngOnInit() {
  }

  onSubmit(userData) {
    this.loginForm.reset();
    this.authenticationService.login({
      username: userData.userName,
      password: userData.password,
      grant_type: "password"
    }).subscribe(
      (data:any) => {
        debugger;
        if(data!=null){
          this.cookieService.set('restaurant-auth', data.access_token);
        }
      },
      (error:any) => {
        debugger;
      }
    )
  }

}
