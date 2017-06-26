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
  constructor(private _fb:FormBuilder,private _service:registerService) { 
      this.registerForm=this._fb.group({
        name:[null,Validators.required],
        email:[null,Validators
          .compose([Validators.required,Validators.email])],
        contact:[null,Validators.compose([Validators.required
        ,Validators.pattern(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3,9}$/)])],
        password:[null,Validators.required]
      })
  }

  ngOnInit() {

  }
 addUser(data:Register){
  
  console.log(this.registerForm);
    /*this._service.addUer(data)
    .subscribe(
      data=>console.log(data),
      error=>console.log(error),
      ()=>console.log('finished')
    )
    */

 }
}
