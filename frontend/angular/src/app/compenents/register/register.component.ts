import { Component, OnInit } from '@angular/core';
import {user} from './user';
import {UserService} from '../../services/user.service'
declare let alertify:any;
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[UserService]

})
export class RegisterComponent implements OnInit {

  constructor(private userService:UserService,private router: Router) { }
  user:any={};


  ngOnInit() {


  }
  register(user:user)
  {
    //console.log(user);
    this.userService.register(user);
    alertify.success("Başarıyla kayıt oldunuz.")
      alertify.alert("Başarıyla kayıt oldunuz", function(){
   
  });
      /*window.location.assign(this.path_home);*/
      
      this.router.navigate(['/giris']);
  }

}
