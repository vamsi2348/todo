import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AuthServiceService} from '../../service/auth-service.service'

interface loginFormInput  {
  email:string,
  password:string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private fb: FormBuilder, private authService:AuthServiceService ) { }
  loginForm:FormGroup=this.fb.group({
    // Form controls and validators here
    email:['',[Validators.required, Validators.email]],
    password:['',[Validators.required]]
  });

  //submitting
  submitLogin(){
    if(this.loginForm.get('email')?.value === ''){
      alert("Please Enter Email");
    }
    if(this.loginForm.get('password')?.value === ''){
      alert("Please Enter password");
    }
    this.authService.login(this.loginForm.get('email')?.value, this.loginForm.get('password')?.value)
  }

}
