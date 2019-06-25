import { Component, OnInit } from '@angular/core';
import { IlanlarService } from '../../services/ilanlar.service';
import { UserService } from '../../services/user.service'
import { ilan } from '../ilanlar/ilan';
declare let alertify:any;
import { Router } from '@angular/router';

@Component({
  selector: 'app-uilan',
  templateUrl: './uilan.component.html',
  styleUrls: ['./uilan.component.css']
})
export class UilanComponent implements OnInit {

  constructor(private ilanServis: IlanlarService,private userService: UserService,private router: Router) { }
  ilanlar: ilan[];
  payload:Object;

  ngOnInit() {
    
    this.ilanServis.getuser_id(localStorage.getItem("user_info")).subscribe(data=>{
      this.payload=data;
      console.log(this.payload[0]._id + '')
      this.ilanServis.getIlanlarByUser(this.payload[0]._id + '').subscribe(data => {
        this.ilanlar = data;
        console.log(this.ilanlar);
      })
    })
  
  }
  delete(ilan_id:String)
  {
    
    if (confirm('İlanı Silmek İstediğinize Emin Misiniz ?')) {
      this.ngOnInit();
      
      this.ilanServis.deleteIlan(ilan_id).subscribe(data=>{
        alertify.success('Silme İşlemi Başarılı');
      });

      
      
  } else {
    alertify.error('Başarısız.')
  }
  
  }

}
