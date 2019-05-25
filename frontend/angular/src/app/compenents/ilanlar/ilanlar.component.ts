import { Component, OnInit } from '@angular/core';
import { IlanlarService } from '../../services/ilanlar.service';
import {ilan} from './ilan';

@Component({
  selector: 'app-ilanlar',
  templateUrl: './ilanlar.component.html',
  styleUrls: ['./ilanlar.component.css']
})
export class IlanlarComponent implements OnInit {

  constructor(private ilanServis:IlanlarService) { }
  ilanlar:ilan[]

  ngOnInit() {
    this.ilanServis.getIlanlar().subscribe(data=>{
      this.ilanlar = data;
      console.log(this.ilanlar);
    })
  }

}
