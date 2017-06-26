import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { authService } from '../shared/auth.service';
import { FormGroup,FormBuilder,Validators } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public userForm:FormGroup;
  public user:User;
  public submitted:boolean=false;
  constructor(private _getToken:authService,private _fb:FormBuilder) {
    this.userForm=_fb.group({
      username:[null,Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(50)])],
      password:[null,Validators.compose([Validators.minLength(8),Validators.maxLength(50)])]
    })
   }

    login(userData)
    {
      this._getToken.getKey(userData)
        .subscribe(
          data=>console.log(data),
          error=>console.log(error),
          ()=>console.log('ist oks')
          );

    }
  ngOnInit() {
  }
}
