import { Component, OnInit } from '@angular/core';
import { IlanlarComponent } from '../compenents/ilanlar/ilanlar.component'



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  providers: [IlanlarComponent]
})
export class NavComponent implements OnInit {

  constructor() { }
  giris:Object = localStorage.getItem("user_info");
  
  ngOnInit() {
    

    
  }
  cikis()
  {
    localStorage.removeItem("user_info")
    window.location.reload();
  }
}
