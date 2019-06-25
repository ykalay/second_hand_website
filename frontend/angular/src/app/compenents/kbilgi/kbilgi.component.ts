import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service'
import { user } from '../register/user';
declare let alertify:any;

@Component({
  selector: 'app-kbilgi',
  templateUrl: './kbilgi.component.html',
  styleUrls: ['./kbilgi.component.css']

})
export class KbilgiComponent implements OnInit {

  constructor(private userService: UserService) { }

  user: any = {};
  user1: user[];
  

  ngOnInit() {

    

    this.userService.get().subscribe(data => {
      this.user1 = data;
      console.log(this.user1);
    })
  }
  async update(user: user) {
    if(this.user.u_password == null)
    {
      this.user.u_password = this.user1[0].u_password;
    }
    if(this.user.name == null)
    {
      this.user.name = this.user1[0].name;
    }
    if(this.user.location == null)
    {
      this.user.location = this.user1[0].location;
    }
    if(this.user.tel_no == null)
    {
      this.user.tel_no = this.user1[0].tel_no;
    }
    this.user.u_name = this.user1[0].u_name;
    this.userService.update(user);
    alertify.success('Değişikler Kayıt Edildi')
  }

}
