import { Component, OnInit } from '@angular/core';
import { IlanlarService } from 'src/app/services/ilanlar.service';
import {ilan} from '../ilanlar/ilan'
import { interpolation1 } from '@angular/core/src/render3';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { __assign } from 'tslib';
@Component({
  selector: 'app-new-ilan',
  templateUrl: './new-ilan.component.html',
  styleUrls: ['./new-ilan.component.css'],
  providers:[IlanlarService]
})
export class NewIlanComponent implements OnInit {
  
  constructor(private ilanService:IlanlarService,private http:HttpClient) { }
  path:string = environment.path;
  ngOnInit() {}
  ilan1:any = {};
  ekle(ilan1:ilan){
    var e:HTMLSelectElement = document.getElementById("Kategori");
    var strUser = (e.options[e.selectedIndex].value);
    ilan1.ilan_catagory = strUser;


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
