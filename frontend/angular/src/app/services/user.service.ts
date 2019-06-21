import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { user } from '../compenents/register/user';
import { registerContentQuery } from '@angular/core/src/render3';


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
}
