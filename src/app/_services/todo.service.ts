import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private _httpClient: HttpClient) { }

  getToken() {
    let token = localStorage.getItem('token');
    console.log(token);

    return token;
  }
  getTodo() {
    let userToken = this.getToken()

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${userToken}`
    })
    return this._httpClient.get(environment.baseUrl + 'all', { headers: headers });
  }
  getTodoById(id: number): Observable<any> {
    let userToken = this.getToken()
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${userToken}`
    })
    let getTodo = this._httpClient.get(environment.baseUrl + 'edit/' + id, { headers: headers })
    this.getTodo();
    return getTodo;
  }
  editItem(id: number): Observable<any> {
    let userToken = this.getToken()
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${userToken}`
    })
    let editTodo = this._httpClient.patch(environment.baseUrl + 'update/' + id, { headers: headers })
    this.getTodo();
    return editTodo;
  }
  // delete 
  deleteItem(id: number): Observable<any> {
    let userToken = this.getToken()
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${userToken}`
    })
    let deleteTodo = this._httpClient.delete(environment.baseUrl + 'delete/' + id, { headers: headers })
    this.getTodo();
    return deleteTodo;
  }
}
