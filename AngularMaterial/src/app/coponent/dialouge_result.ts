import { Component } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';
import {AppComponent} from "../app.component";

@Component({
  selector: 'dig',
  templateUrl: './dialouge_result.html'
})
export class DialougeComponent {

  constructor(public dialogRef: MdDialogRef<AppComponent>){}

}
