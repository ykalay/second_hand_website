import { Component, OnInit } from '@angular/core';
import { IlanlarService } from '../../services/ilanlar.service';
import { UserService } from '../../services/user.service'
import { ilan } from '../ilanlar/ilan';

@Component({
  selector: 'app-uilan',
  templateUrl: './uilan.component.html',
  styleUrls: ['./uilan.component.css']
})
export class UilanComponent implements OnInit {

  constructor(private ilanServis: IlanlarService,private userService: UserService) { }
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

}
