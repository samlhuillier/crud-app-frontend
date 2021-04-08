import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from 'src/app/dialog/dialog.component';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  @Output() addUser: EventEmitter<any> = new EventEmitter()

  name: string;
  email: string;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  // openDialog() {
  //   // const dialogRef = this.dialog.open(DialogComponent);

  //   // dialogRef.afterClosed().subscribe(result => {
  //   //   console.log(`Dialog result: ${result}`);
  //   // });
  //   const dialogConfig = new MatDialogConfig();

  //   // dialogConfig.disableClose = true;
  //   dialogConfig.autoFocus = true;
  //   dialogConfig.data = {
  //     name: 'Yo',
  //     email: 'Bro'
  // };
  //   this.dialog.open(DialogComponent, dialogConfig);
  // }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: {name: '', email: ''}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result)
      this.addUser.emit({name: result.name, email: result.email})
      // this.animal = result;
    });
  }

}
  // getUserDetails(user){//So we're not actually sending a user type but rather a semi-user type
  //   console.log("in get user details")
  //   this.addUser.emit(user)
  // }
  // onSubmit(){
  //   this.addUser.emit({name: this.name, email: this.email})
  // }
// }

