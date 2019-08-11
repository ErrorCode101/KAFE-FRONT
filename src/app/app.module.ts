import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { MatTabsModule, MatTableModule, MatGridListModule, MatCardModule, MatToolbarModule, MatSidenavModule, MatListModule } from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import {DialogOverviewExampleDialog, TableListComponent} from './table-list/table-list.component';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule
} from '@angular/material';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { HttpClientModule } from '@angular/common/http';
import { CreateRestaurantComponent } from './restaurant/resgister/create.restaurant.component';
import { PendingRestaurantComponent } from './restaurant/pendingrequests/pending.restaurants.component';
import { AddUserComponent } from './user/adduser/adduser.component';
import { HttpService } from './services/https.service';
import { CommonService } from './services/common.service';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import {CookieService} from 'ngx-cookie-service';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    MatCardModule,
    MatGridListModule,
    MatTabsModule,
    MatIconModule,
    MatDialogModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatRippleModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,  
    FlexLayoutModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    DialogOverviewExampleDialog,
    CreateRestaurantComponent,
    PendingRestaurantComponent,
    AddUserComponent,
    HomeComponent,
    TableListComponent
  ],
  providers: [HttpService, CommonService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
