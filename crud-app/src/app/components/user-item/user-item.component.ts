import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../models/User'
@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  @Input() user: User
  @Output() deleteUser: EventEmitter<User> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  onDelete(user){
    console.log('in delete')
    this.deleteUser.emit(user)
  }

}
