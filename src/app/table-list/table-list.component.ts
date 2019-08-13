import { Component, OnInit, Inject } from '@angular/core';
import Item from '../models/Item';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ItemRetrievalService } from 'app/item-retrieval.service';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit{
  
  displayedColumns: string[] = ['itemId', 'name', 'description', 'readyInMins', 'price', 'actions'];

  public items:Item[] = [];

  constructor(public dialog: MatDialog, private itemRetrivalService: ItemRetrievalService) { 
   
  }

  ngOnInit(): void {
    this.getItems();
  }

  private getItems(): void{
    this.itemRetrivalService.getItems().subscribe((result:any) => {
      this.items = result;
      
    })
  }

  openDialog(action,obj): void {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '50%',
      data:obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'Update'){
        this.updateRowData(result.data);
      }else if(result.event == 'Delete'){
        this.deleteRowData(result.data);
      }
    });
  }

  updateRowData(item:any): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '50%',
      data: item
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  deleteRowData(item: any):void{
    this.itemRetrivalService.deleteItem(item).subscribe((result:any) => {
      this.getItems();
      
    })
    debugger
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

    private item:Item = {
      id: null,
      itemId:"",
      name:"",
      description:"",
      price:0,
      readyInMinutes:0,
      likes: 0,
      imageUrl: "",
      savings: "",
      reviews: [],
      ingredients: []
    }

    action:string;
    local_data:any;

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Item,private itemRetrievalService:ItemRetrievalService) {
      console.log(data);
      this.local_data = {...data};
      this.action = this.local_data.action;
    }

    onSubmit(){
      this.itemRetrievalService.saveItem(this.item).subscribe((data:any)=>{     
        debugger
        this.dialogRef.close({event:'Add' });
      }, error => {
        debugger
      })
    }

    doAction(){
      this.dialogRef.close({event:this.action,data:this.local_data});
    }
   
    closeDialog(){
      this.dialogRef.close({event:'Cancel'});
    }

  onNoClick(event:any): void {
    this.dialogRef.close();
  }

  fileChanged(data:any):void {
      this.item.imageUrl = "https://thewoksoflife.com/wp-content/uploads/2017/01/long-life-noodles-4.jpg";
  }

  nameChanged(data:any):void {
    this.item.name = data;
  }

  idChanged(data:any):void {
    this.item.itemId = data;
  }

  descriptionChanged(data:any):void {
    this.item.description = data;
  }

  priceChanged(data:any):void {
    this.item.price = data;
  }

  readyInMinsChanged(data:any):void {
    this.item.readyInMinutes = data;
  }
}
