import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormsModule,Validators } from '@angular/forms';
import { Register } from './register';
import { registerService } from '../shared/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registerForm:FormGroup;
  public submit:boolean=false;
  constructor(private _fb:FormBuilder,private _service:registerService) { 
      this.registerForm=this._fb.group({
        name:[null,Validators.compose([Validators.minLength(8),Validators.maxLength(50)])],
        email:[null,Validators.compose([Validators.required,Validators.email])],
        contact:[null,Validators.compose([Validators.required,Validators.pattern(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3,9}$/)])],
        password:[null,Validators.compose([Validators.minLength(8),Validators.maxLength(50)])]
      })
  }

  ngOnInit() {

  }
  handleData(data)
  {
    this.submit=false;
    console.log(data);

  }
  errorHandle(error)
  {
    this.submit=false;
    console.log(error);
  }
 addUser(data:Register){
    this.submit=true;
    this._service.addUer(data)
    .subscribe(
      data=>this.handleData(data),
      error=>this.errorHandle(error),
      ()=>this.submit=false
    )
 }
}
