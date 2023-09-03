import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AuthServiceService} from '../../service/auth-service.service'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private fb: FormBuilder, private authService:AuthServiceService ) { }
  registerForm:FormGroup=this.fb.group({
    // Form controls and validators here
    email:['',[Validators.required, Validators.email]],
    password:['',[Validators.required]],
    name:['',[Validators.required]]

  });

  //submitting
  registerAccount(){
    if(this.registerForm.get('email')?.value === ''){
      alert("Please Enter Email");
    }
    if(this.registerForm.get('password')?.value === ''){
      alert("Please Enter password");
    }
    if(this.registerForm.get('name')?.value === ''){
      alert("Please Enter name"); 
    }
    // this.authService.login(this.registerForm.get('email')?.value, this.registerForm.get('password')?.value)
    this.authService.register(this.registerForm.get('email')?.value, this.registerForm.get('password')?.value)
    
  }

}
