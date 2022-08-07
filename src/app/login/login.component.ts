import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup = new FormGroup({
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.min(6)])
  });
  constructor(private _AuthService:AuthService,private _Router:Router) { }

  ngOnInit(): void {
   
  }
  submitForm(loginForm:FormGroup){
    if(loginForm.valid){
    this._AuthService.sendLoginData(loginForm.value).subscribe(
      (res)=>{
        if(res.message == "success"){
          localStorage.setItem('token',res.token)
          console.log(res);
          
          this._Router.navigate(['list']);
        }
      },
      (err)=>{
          console.log(err);
          
      },()=>{})
      
    }
  this._AuthService.setUserData();
  }

}
