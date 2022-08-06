import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient) { }

  sendRegisterData(data:object):Observable<any>
  {
    return this._HttpClient.post(environment.baseUrl+'register',data);
  }

  sendLoginData(loginData:object):Observable<any>
  {
    return this._HttpClient.post(environment.baseUrl+'login',loginData);
  }
}
