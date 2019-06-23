import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
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
