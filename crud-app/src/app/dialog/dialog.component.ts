import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  name: string;
  email: string;
}
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})

export class DialogComponent implements OnInit {
  // @Output() getUserDetails: EventEmitter<any> = new EventEmitter()

  // constructor() { }

  ngOnInit(): void {
    // this.getUserDetails.emit({name: 'jez', email: 'jez@gmail.com'})
  }
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
