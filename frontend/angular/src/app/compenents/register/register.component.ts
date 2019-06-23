import { Component, OnInit } from '@angular/core';
import {user} from './user';
import {UserService} from '../../services/user.service'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[UserService]

})
export class RegisterComponent implements OnInit {

  constructor(private userService:UserService) { }
  user:any={};


  ngOnInit() {


  }
  register(user:user)
  {
    //console.log(user);
    this.userService.register(user);
  }

}
