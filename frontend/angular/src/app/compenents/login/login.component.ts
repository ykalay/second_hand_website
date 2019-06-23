import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import {userLogin} from './userLogin';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[UserService]
})
export class LoginComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit() {
  }
  user:any = {};
  giris:Object = {};
  path_home: string = environment.path_home;
  async login(user:userLogin)
  {
    //console.log(user);
    this.userService.login(user);
    
    
  }
 
}
