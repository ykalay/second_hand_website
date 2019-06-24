import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { user } from '../compenents/register/user';
import { registerContentQuery } from '@angular/core/src/render3';
import { userLogin } from '../compenents/login/userLogin';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  path = environment.path
  path_home = environment.path_home;
  TOKEN_KEY = "user_info";

  register(user: user) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json")
    this.http.post(this.path + "/user/insert", user, { headers: headers }).subscribe();
  }
  async login(user: userLogin) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json")
    await this.http.post(this.path + "/user/login", user, { headers: headers }).subscribe(data => {


      this.saveToken(data['token']);


    });

  }
   update(user: user) {
    console.log(user)
      alert(user)
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json")
     this.http.post(this.path + "/user/update", user, { headers: headers }).subscribe(data => {

      
      alert('Değişiklikler Kayıt Edildi.');

    });

  }
  get(): Observable<user[]> {
    return this.http.get<user[]>(this.path + "/user/get/" + localStorage.getItem('user_info'));
   
     
  
    
  }
  getuserbyid(id:String):Observable<user[]>
  {
    return this.http.get<user[]>(this.path + "/user/getbyid/" + id);
  }
  getuser_payload(token:String):Observable<object>{
  
    return this.http.get<object>(this.path+"/user/get/payload/" + token);
    
  }

  saveToken(token) {

    if (token != "") {

      localStorage.setItem(this.TOKEN_KEY, token);
      window.location.assign(this.path_home);
      /*window.location = (this.path_home);*/

    }
  }
  logOut() {
    localStorage.removeItem(this.TOKEN_KEY);
  }



}
