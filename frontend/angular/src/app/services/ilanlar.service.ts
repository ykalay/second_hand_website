import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
  
}
