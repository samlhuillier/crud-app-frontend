import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User'
import { UsersService } from '../../services/users.service'
import { DialogComponent } from 'src/app/dialog/dialog.component';
import {MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  constructor(private usersService: UsersService, public dialog: MatDialog) { }
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  addUser(user){//So we're not actually sending a user type but rather a semi-user type
    console.log(user)
    this.usersService.addUser(user).subscribe((user: User) => {
      console.log(user)
      this.users.push(user)
    })
  }
  deleteUser(user: User){
    this.users = this.users.filter(u => u.id !== user.id)
    this.usersService.deleteUser(user).subscribe()
  }
  wantModify(user){//so atm, all it does is show and hide the form based on setting the html class for css
    //What we want to do is call the same opendialog stuff as the add user component does
    // this.wantsToModifyUserValues = !this.wantsToModifyUserValues
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: {name: user.name, email: user.email}
    });

    dialogRef.afterClosed().subscribe(result => {
      // result.name 
      // result.email
      const modifiedUser = {id: user.id, name: result.name, email: result.email}
      this.users = this.users.map(u => {
        if (u.id===modifiedUser.id){
          return modifiedUser
        }
        return u
      })
      this.usersService.modifyUser(modifiedUser).subscribe()
      
    });
  }
  // modifyUser(user){
  //   this.users = this.users.map(u => {
  //     if (u.id===user.id){
  //       return user
  //     }
  //     return u
  //   })
  //   this.usersService.modifyUser(user).subscribe()
  // }
  ngOnInit(): void {
    //Let's just try adding a user before getting all users 
    // this.addUser({name: 'newuser', email: 'newuser@gmail.com'})
    this.usersService.getUsers().subscribe(users => this.users=users)
  }

}
