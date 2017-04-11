import { Component } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';
import {DialougeComponent} from "./coponent/dialouge_result";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  selectedOption: string;

  constructor(public dialog: MdDialog){}

  openDialog() {
    let dialogRef = this.dialog.open(DialougeComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.selectedOption = result;
    });
  }

}
