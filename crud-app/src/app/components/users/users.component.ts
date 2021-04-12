import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User'
import { UsersService } from '../../services/users.service'
import { DialogComponent } from 'src/app/dialog/dialog.component';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  constructor(private usersService: UsersService, public dialog: MatDialog) { }

  addUser(user){
    this.usersService.addUser(user).subscribe((user: User) => {
      this.users.push(user)
    })
  }
  deleteUser(user: User){
    this.users = this.users.filter(u => u.id !== user.id)
    this.usersService.deleteUser(user).subscribe()
  }
  wantModify(user){
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: {name: user.name, email: user.email}
    });

    dialogRef.afterClosed().subscribe(result => {
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
  ngOnInit(): void {
    this.usersService.getUsers().subscribe(users => this.users=users)
  }

}
