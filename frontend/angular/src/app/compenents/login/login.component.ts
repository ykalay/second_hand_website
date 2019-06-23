import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import {userLogin} from './userLogin';


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
  login(user:userLogin)
  {
    //console.log(user);
    this.userService.login(user);
  }
}
