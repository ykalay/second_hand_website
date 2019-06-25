import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { ilan } from '../compenents/ilanlar/ilan';


@Injectable({
  providedIn: 'root'
})
export class IlanlarService {

  constructor(private http:HttpClient) { }
  path:string = environment.path;

  getIlanlar():Observable<ilan[]>{
    return this.http.get<ilan[]>(this.path+"/ilan/select");

  }
  getilanlarTelefon():Observable<ilan[]>{
    return this.http.get<ilan[]>(this.path+"/ilan/select/telefon");
  }
  getilanlarOtomobil():Observable<ilan[]>{
    return this.http.get<ilan[]>(this.path+"/ilan/select/otomobil");
  }
  getilanlarEv():Observable<ilan[]>{
    return this.http.get<ilan[]>(this.path+"/ilan/select/ev");
  }
  getilanlarDiger():Observable<ilan[]>{
    return this.http.get<ilan[]>(this.path+"/ilan/select/diger");
  }
  ekle(ilan1:ilan)
  {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type","application/json")
    this.http.post(this.path+"/ilan/insert",ilan1,{headers:headers}).subscribe(data=>{});
  }
  deleteIlan(ilan_id:String):Observable<ilan>
  {
    return this.http.get<ilan>(this.path+"/ilan/delete/" + ilan_id);
  }
  getIlanInfo(id:String):Observable<ilan>{
    return this.http.get<ilan>(this.path+"/ilan/ilan-info/" + id);
  }
  getuser_id(token:String):Observable<object>
  {
    return this.http.get<object>(this.path+"/user/get/" + token);
  }
  getuser_payload(token:String):Observable<object>{
  
    return this.http.get<object>(this.path+"/user/get/payload/" + token);
    
  }
  getIlanlarByUser(user_id:String):Observable<ilan[]>{
    return this.http.get<ilan[]>(this.path+"/ilan/selectByUId/" + user_id);

  }
  
  

  postFile(fileToUpload: File) {
    const endpoint = '.';
    const formData: FormData = new FormData();
    formData.append('fileKey', fileToUpload, fileToUpload.name);
   
}
  
}
