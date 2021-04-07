import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  @Output() addUser: EventEmitter<any> = new EventEmitter()

  name: string;
  email: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.addUser.emit({name: this.name, email: this.email})
  }
}
