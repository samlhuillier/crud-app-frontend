import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../models/User'
import { DialogComponent } from 'src/app/dialog/dialog.component';
import {MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: '[app-user-item]',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  @Input() user: User
  @Output() deleteUser: EventEmitter<User> = new EventEmitter()
  @Output() modifyUser: EventEmitter<User> = new EventEmitter()

  name: string
  email: string
  wantsToModifyUserValues: boolean = true
  constructor(public dialog: MatDialog) { 
    // this.wantsToModifyUserValues =false
  }

  ngOnInit(): void {
    this.name= this.user.name 
    this.email = this.user.email
  }

  onDelete(user){
    this.deleteUser.emit(user)
  }
  setClasses(){
    return {
      form: true,
      hide: this.wantsToModifyUserValues
    }
  }
  onSubmit(){
    let user = {id: this.user.id, name: this.name, email: this.email}
    this.modifyUser.emit(user)
  }

  wantModify(user){//so atm, all it does is show and hide the form based on setting the html class for css
    //What we want to do is call the same opendialog stuff as the add user component does
    // this.wantsToModifyUserValues = !this.wantsToModifyUserValues
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: {name: this.name, email: this.email}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result)
      this.name = result.name 
      this.email = result.email
      this.onSubmit()
      //this.addUser.emit({name: result.name, email: result.email})
      // this.animal = result;
    });
  }
  

}
