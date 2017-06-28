import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { authService } from '../shared/auth.service';
import { FormGroup,FormBuilder,Validators } from "@angular/forms";
import { Token } from "../shared/token";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public userForm:FormGroup;
  public user:User;
  public submitted:boolean=false;
  public loginfail:boolean=false;


  constructor(
    private _getToken:authService,
    private _fb:FormBuilder,
    private _router:Router
    ) {
    this.userForm=_fb.group({
      username:['mahesh@gmail.com',Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(50)])],
      password:['mahesh',Validators.compose([Validators.minLength(5),Validators.maxLength(50)])]
    })
   }
  public isloggedin:boolean=this._getToken.isLoggedin();
    login(userData)
    {this.submitted=true;
     // console.log(this.userForm.valid)
      this._getToken.getKey(userData)
        .subscribe(
          data=>this.handleData(data),
          error=>this.handleError(error),
          ()=>this.afterLoggedIn()
          );

    }
  handleData(data:Token)
  {
    console.log(data);
    this._getToken.setKey(data);
    this._router.navigate(['/dashboard']);
  }

  ngOnInit() {
    console.log(this.isloggedin);
    if(this._getToken.isLoggedin()){
      this._router.navigate(['/dashboard']);
    }
  }
  afterLoggedIn()
  {
    console.log(this.isloggedin);
    this.submitted=false;
  }
  handleError(data:any){
    this.loginfail=true;
  }
}
