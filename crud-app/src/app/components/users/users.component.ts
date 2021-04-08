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
    this.usersService.addUser(user).subscribe((user: User) => {
      console.log(user)
      this.users.push(user)
    })
  }
  deleteUser(user: User){
    this.users = this.users.filter(u => u.id !== user.id)
    this.usersService.deleteUser(user).subscribe()
  }
  ngOnInit(): void {
    //Let's just try adding a user before getting all users 
    // this.addUser({name: 'newuser', email: 'newuser@gmail.com'})
    this.usersService.getUsers().subscribe(users => this.users=users)
  }

}
