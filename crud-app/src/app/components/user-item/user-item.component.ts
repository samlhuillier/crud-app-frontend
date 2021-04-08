import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../models/User'
@Component({
  selector: '[app-user-item]',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  @Input() user: User
  @Output() deleteUser: EventEmitter<User> = new EventEmitter()
  @Output() modifyUser: EventEmitter<User> = new EventEmitter()

  name: string;
  email: string;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(user){
    this.deleteUser.emit(user)
  }

  onSubmit(){
    let user = {id: this.user.id, name: this.name, email: this.email}
    this.modifyUser.emit(user)
  }
  // onModify(user){
  //   user.name = user.name + 'MODIFICATION'
  //   this.modifyUser.emit(user)
  // }

}
