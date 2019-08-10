import { Component, OnInit, OnChanges, ViewChild } from "@angular/core";
import { FormControl, Validators, NgForm } from '@angular/forms';
import { RestuarantCreateModel } from "app/models/restaurant/create/restuarant.create.model";
import { HttpService } from "app/services/https.service";
import { MatDialog, MatSnackBar } from "@angular/material";
import { CommonService } from "app/services/common.service";
import { SideBarTabs, tabs } from "app/models/sidebar.tabs.mode";
import { trigger, transition, style, animate } from "@angular/animations";

@Component({
    templateUrl: 'home.component.html',
    moduleId: module.id,
    styles: [`h3.sub-head{
                background-color: #eee;
                padding: 6px;
                margin: 8px 0px 0px 0px;
            }`],

    animations: [
        trigger('slideInOut', [
            transition(':enter', [
                style({ transform: 'translateX(-50%)' }),
                animate('300ms ease-in', style({ transform: 'translateX(0%)' }))
            ]),
            transition(':leave', [
                animate('300ms ease-in', style({ transform: 'translateX(-50%)' }))
            ])
        ])
    ]

})

export class HomeComponent {

    sideBarTabs = SideBarTabs;
    fillerNav: { label: string; tab: string; }[] = tabs;
    activeTab: string = SideBarTabs.ADD_USER;

    constructor(private httpService: HttpService, private commonService: CommonService, private snackBar: MatSnackBar) {

    }
    onChangeTab(tab: string): void {
        this.activeTab = tab;
    }
}

