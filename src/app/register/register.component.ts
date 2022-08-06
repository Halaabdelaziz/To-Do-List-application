import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  error:string ="";
  
  registerForm:FormGroup = new FormGroup({
    name:new FormControl(null,[Validators.required]),
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.min(6)])
  });

  constructor(private _AuthService:AuthService,private _Router:Router) { }

  ngOnInit(): void {
    
  }
  submitForm(registerForm:FormGroup){
    if(registerForm.valid){
      this._AuthService.sendRegisterData(registerForm.value).subscribe(
        (res)=>{
          if(res.message == 'success'){
            this._Router.navigate(['list']);
          }
          console.log(res);
          
        },
        (err)=>{
          this.error = err.error.message;
          console.log(err.error.message);
          
        },()=>{}
        );
    }
  }

}
