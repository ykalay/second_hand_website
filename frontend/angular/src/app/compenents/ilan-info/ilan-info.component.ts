import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { IlanlarService } from '../../services/ilanlar.service';
import { UserService } from '../../services/user.service'
import { ilan } from '../ilanlar/ilan';
import { user } from '../register/user';

@Component({
  selector: 'app-ilan-info',
  templateUrl: './ilan-info.component.html',
  styleUrls: ['./ilan-info.component.css']
})
export class IlanInfoComponent implements OnInit {

  constructor(private ilanServis: IlanlarService,private route: ActivatedRoute,private userService: UserService) { }

  id:String= "";
  ilanlar:any = {};
  user:user[];
  splitted_image:any = {};
  ngOnInit() {
    
    this.route.params.subscribe( params => this.id =(params.id) );
    this.ilanServis.getIlanInfo(this.id).subscribe(data => {
      this.ilanlar = data;
      console.log(this.ilanlar);
      this.fnc();
      this.splitted_image = this.ilanlar.ilan_image_path.split(",", 3); 
      console.log(this.splitted_image);
    })
    
    
  
  }
  fnc(){
    console.log(this.ilanlar);
    this.userService.getuserbyid(this.ilanlar.ilan_from_user_id+'').subscribe(data=>{
      this.user = data;
      console.log(this.user);
    })
  }
 

}  
