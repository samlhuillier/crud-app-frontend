import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User'
import { UsersService } from '../../services/users.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  constructor(private usersService: UsersService) { }

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
  modifyUser(user){
    console.log(user)
    this.users = this.users.map(u => {
      if (u.id===user.id){
        return user
      }
      return u
    })
    this.usersService.modifyUser(user).subscribe()
  }
  ngOnInit(): void {
    //Let's just try adding a user before getting all users 
    // this.addUser({name: 'newuser', email: 'newuser@gmail.com'})
    this.usersService.getUsers().subscribe(users => this.users=users)
  }

}
