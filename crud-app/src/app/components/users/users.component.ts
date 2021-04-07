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

  addUser(user: User){//Will need to be called by the form
    this.usersService.addUser(user).subscribe(user => this.users.push(user))
  }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe(users => this.users=users)
  }

}
