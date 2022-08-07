import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData = new BehaviorSubject<string|null>(null);

  constructor(private _HttpClient:HttpClient,private _Router:Router) { }

  sendRegisterData(data:object):Observable<any>
  {
    return this._HttpClient.post(environment.baseUrl+'register',data);
  }

  sendLoginData(loginData:object):Observable<any>
  {
    return this._HttpClient.post(environment.baseUrl+'login',loginData);
  }

  
  getToken() {
    let token = localStorage.getItem('token');
    return token;
  }

  setUserData(){
    let token = localStorage.getItem('token');
    this.userData.next(token);
    
  }

  logOut(){
    localStorage.removeItem('token')
    this.userData.next(null);
    this._Router.navigate(['login']);
    let userToken = this.getToken()
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${userToken}`
    })
    return this._HttpClient.post(environment.baseUrl+'logout',{headers:headers});
  }
}
