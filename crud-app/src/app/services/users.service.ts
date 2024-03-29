import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { User } from '../models/User'

// const usersUrl = 'http://localhost:5000/api/users'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  usersUrl:string = '/api/users'
  constructor(private http: HttpClient) { }

  getUsers():Observable<User[]>{
    return this.http.get<User[]>(this.usersUrl)
  }

  addUser(user: User){
    return this.http.post<User>(this.usersUrl, user, httpOptions)
  }
  deleteUser(user: User){
    const url = `${this.usersUrl}/${user.id}`
    return this.http.delete<User>(url, httpOptions)
  }
  modifyUser(user: User){
    const url = `${this.usersUrl}/${user.id}`
    return this.http.put<User>(url, user, httpOptions)
  }
}
