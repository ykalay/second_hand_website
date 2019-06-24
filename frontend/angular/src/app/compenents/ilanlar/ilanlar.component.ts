import { Component, OnInit } from '@angular/core';
import { IlanlarService } from '../../services/ilanlar.service';
import { ilan } from './ilan';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-ilanlar',
  templateUrl: './ilanlar.component.html',
  styleUrls: ['./ilanlar.component.css']
})
export class IlanlarComponent implements OnInit {

  constructor(private ilanServis: IlanlarService, private router: Router) { }
  ilanlar: ilan[];
  filterText: string;
  path: string = environment.path;


  ngOnInit() {
    console.log(this.router.url)
    if (this.router.url == '/otomobil') {
      this.ilanServis.getilanlarOtomobil().subscribe(data => {
        this.ilanlar = data;

        console.log(this.ilanlar);
      })
    }
    else if (this.router.url == '/') {
      this.ilanServis.getIlanlar().subscribe(data => {
        this.ilanlar = data;
        console.log(this.ilanlar);
      })
    }
    else if (this.router.url == '/telefon') {
      this.ilanServis.getilanlarTelefon().subscribe(data => {
        this.ilanlar = data;
        console.log(this.ilanlar);
      })
    }
    else if (this.router.url == '/ev') {
      this.ilanServis.getilanlarEv().subscribe(data => {
        this.ilanlar = data;
        console.log(this.ilanlar);
      })
    }
    else if (this.router.url == '/diger') {
      this.ilanServis.getilanlarDiger().subscribe(data => {
        this.ilanlar = data;
        console.log(this.ilanlar);
      })
    }
    
  }
  tiklananIlan(ilan_uniqueid:string){
    console.log(ilan_uniqueid);

}

}
