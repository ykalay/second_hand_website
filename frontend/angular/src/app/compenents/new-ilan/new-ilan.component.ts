import { Component, OnInit } from '@angular/core';
import { IlanlarService } from 'src/app/services/ilanlar.service';
import {ilan} from '../ilanlar/ilan'
import { interpolation1 } from '@angular/core/src/render3';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { user } from '../register/user';
declare let alertify:any;
import { Router } from '@angular/router';

import { __assign } from 'tslib';
@Component({
  selector: 'app-new-ilan',
  templateUrl: './new-ilan.component.html',
  styleUrls: ['./new-ilan.component.css'],
  providers:[IlanlarService]
})
export class NewIlanComponent implements OnInit {
  
  constructor(private ilanService:IlanlarService,private http:HttpClient,private router: Router) { }
  path_home = environment.path_home;
  path:string = environment.path;
  ilan1:any = {};
  user1: user[];
  ngOnInit() {
    if(localStorage.getItem("user_info") == null)
    {
      
      alertify.error("İlan Eklemek İçin Giriş Yapmalısınız")
      alertify.alert("İlan Eklemek İçin Giriş Yapmalısınız", function(){
    alertify.message('OK');
  });
  window.location.assign(this.path_home);
      /*window.location.assign(this.path_home);*/
      this.router.navigate(['/']);
      alert("İlan Eklemek İçin Giriş Yapmalısınız")
      
    }
    this.ilanService.getuser_id(localStorage.getItem("user_info")).subscribe(data => {
      
      this.user1 = data;
      
    })
  }
  
  val1:String;
  ekle(ilan1:ilan){
    var e:HTMLSelectElement = document.getElementById("Kategori");
    var strUser = (e.options[e.selectedIndex].value);
    ilan1.ilan_catagory = strUser;
    ilan1.ilan_vitrin_image_path = this.val1;
    console.log(this.user1[0]._id + '')
    ilan1.ilan_from_user_id = this.user1[0]._id + '';
    ilan1.ilan_image_path = this.val1;

    this.ilanService.ekle(ilan1);
    alertify.success("İlan Ekleme İşlemi Başarılı")
      alertify.alert("İlan Ekleme İşlemi Başarılı", function(){
    alertify.message('OK');  });
    setTimeout(window.location.assign(this.path_home),500);
    ;
  }
  fileToUpload:any ={} ;
  postMethod(files: FileList) {
    this.fileToUpload = files.item(0); 
    let formData = new FormData(); 
    formData.append('file', this.fileToUpload, this.fileToUpload.name); 
    this.http.post(this.path+'/ilan/upload', formData).subscribe((val) => {
    this.val1 =val['fileUrl'];
    
    console.log(val);
    });
    return false; 
    }

    public imagePath;
    imgURL: any;
    public message: string;
   
    preview(files) {
      if (files.length === 0)
        return;
   
      var mimeType = files[0].type;
      if (mimeType.match(/image\/*/) == null) {
        this.message = "Only images are supported.";
        return;
      }
   
      var reader = new FileReader();
      this.imagePath = files;
      reader.readAsDataURL(files[0]); 
      reader.onload = (_event) => { 
        this.imgURL = reader.result; 
      }
    }
}
