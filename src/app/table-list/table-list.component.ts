import { Component, OnInit, Inject } from '@angular/core';
import Item from '../models/Item';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ItemRetrievalService } from 'app/item-retrieval.service';
import { trigger, transition, style, animate } from '@angular/animations';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css'],
})
export class TableListComponent {
  displayedColumns: string[] = ['itemId', 'name', 'description', 'readyInMins', 'price', 'actions'];

  public items: Item[] = [{
    itemId: "1",
    name: "Rice",
    description: "good",
    price: 150.00,
    readyInMinutes: 10,
    likes: 20,
    imageUrl: "",
    savings: "",
    reviews: [],
    ingredients: []
  }];

  constructor(public dialog: MatDialog, private itemRetrivalService: ItemRetrievalService) {
    this.itemRetrivalService.getItems().subscribe((result: any) => {
      this.items = result.data;
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '50%',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  private item: Item = {
    itemId: "",
    name: "",
    description: "",
    price: 0,
    readyInMinutes: 0,
    likes: 0,
    imageUrl: "",
    savings: "",
    reviews: [],
    ingredients: []
  }

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private itemRetrievalService: ItemRetrievalService) {

  }

  onSubmit() {
    this.itemRetrievalService.saveItem(this.item).subscribe((data: any) => {
      debugger
    }, error => {
      debugger
    })
  }

  onNoClick(event: any): void {
    this.dialogRef.close();
  }

  fileChanged(data: any): void {
    this.item.imageUrl = "https://thewoksoflife.com/wp-content/uploads/2017/01/long-life-noodles-4.jpg";
  }

  nameChanged(data: any): void {
    this.item.name = data;
  }

  idChanged(data: any): void {
    this.item.itemId = data;
  }

  descriptonChanged(data: any): void {
    this.item.description = data;
  }

  priceChanged(data: any): void {
    this.item.price = data;
  }

  readyInMinsChanged(data: any): void {
    this.item.readyInMinutes = data;
  }
}
