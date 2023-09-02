import { Injectable } from '@angular/core';
//Importing angular authentication service
import { AngularFireAuth} from '@angular/fire/compat/Auth'
//routing module 
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private fireAuth:AngularFireAuth, private router:Router ) { }

  //login method
  login(email:string,password:string ){
    this.fireAuth.signInWithEmailAndPassword(email,password).then( () => {
      localStorage.setItem('token','true');
      this.router.navigate(['dashboard'])
    },err => {
      alert(err.message);
      this.router.navigate(['login'])
    })
  }

  //register
  register(email:string, password:string){
    this.fireAuth.createUserWithEmailAndPassword(email,password).then(()=>{
      alert('registration has been successful');
      this.router.navigate(['login'])
    },err=>{
      alert(err.message);
      this.router.navigate(['register'])

    })
  }


  //signout
  logout(){
    this.fireAuth.signOut().then(() => {
      alert("Logout Success");
      localStorage.removeItem("token");
      this.router.navigate(['login']);
    },err => {
      alert(err.message)
    })
  }
}
