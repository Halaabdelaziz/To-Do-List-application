import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private _httpClient:HttpClient) { }

  getTodo(){
    return this._httpClient.get(environment.baseUrl+'all');
  }
}
