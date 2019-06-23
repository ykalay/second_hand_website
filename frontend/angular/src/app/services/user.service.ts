import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { user } from '../compenents/register/user';
import { registerContentQuery } from '@angular/core/src/render3';
import {userLogin} from '../compenents/login/userLogin';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  path = environment.path
  

  register(user:user)
  {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type","application/json")
    this.http.post(this.path+"/user/insert",user,{headers:headers}).subscribe();
  }
  login(user:userLogin)
  {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type","application/json")
    this.http.post(this.path+"/user/login",user,{headers:headers}).subscribe(data=>{});
  }
  
}
