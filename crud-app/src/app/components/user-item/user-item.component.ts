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

  name: string
  email: string
  wantsToModifyUserValues: boolean = true
  constructor() { 
    // this.wantsToModifyUserValues =false
  }

  ngOnInit(): void {
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

  wantModify(user){
    this.wantsToModifyUserValues = !this.wantsToModifyUserValues
  }
  

}
