import { Component, OnInit } from '@angular/core';
import { IlanlarService } from 'src/app/services/ilanlar.service';
import {ilan} from '../ilanlar/ilan'
import { interpolation1 } from '@angular/core/src/render3';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { user } from '../register/user';

import { __assign } from 'tslib';
@Component({
  selector: 'app-new-ilan',
  templateUrl: './new-ilan.component.html',
  styleUrls: ['./new-ilan.component.css'],
  providers:[IlanlarService]
})
export class NewIlanComponent implements OnInit {
  
  constructor(private ilanService:IlanlarService,private http:HttpClient) { }
  path_home = environment.path_home;
  path:string = environment.path;
  ilan1:any = {};
  user1: user[];
  ngOnInit() {
    if(localStorage.getItem("user_info") == null)
    {
      window.location.assign(this.path_home);
      alert("İlan Eklemek İçin Giriş Yapmalısınız")
      
    }
    this.ilanService.getuser_id(localStorage.getItem("user_info")).subscribe(data => {
      
      this.user1 = data;
      
    })
  }
  
  ekle(ilan1:ilan){
    var e:HTMLSelectElement = document.getElementById("Kategori");
    var strUser = (e.options[e.selectedIndex].value);
    ilan1.ilan_catagory = strUser;
    
    console.log(this.user1[0]._id + '')
    ilan1.ilan_from_user_id = this.user1[0]._id + ''
    

    this.ilanService.ekle(ilan1);
  }

  fileToUpload:any ={} ;
  postMethod(files: FileList) {
    this.fileToUpload = files.item(0); 
    let formData = new FormData(); 
    formData.append('file', this.fileToUpload, this.fileToUpload.name); 
    this.http.post(this.path+'/ilan/upload', formData).subscribe((val) => {
    
    console.log(val);
    });
    return false; 
    }
}
