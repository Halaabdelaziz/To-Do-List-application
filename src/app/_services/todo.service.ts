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
    return token;
  }
  // get all
  getTodo() {
    let userToken = this.getToken()

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${userToken}`
    })
    return this._httpClient.get(environment.baseUrl + 'all', { headers: headers });
  }
  // add
  addItem(todoData: object): Observable<any> {
    let userToken = this.getToken()

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${userToken}`
    })
    let addTodo = this._httpClient.post(environment.baseUrl + 'add', todoData, { headers: headers })

    return addTodo;
  }
  // get
  getTodoById(id: number): Observable<any> {
    let userToken = this.getToken()
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${userToken}`
    })
    let getTodo = this._httpClient.get(environment.baseUrl + 'edit/' + id, { headers: headers })

    return getTodo;
  }
  // edit
  editItem(data: object,id:number): Observable<any> {
    let userToken = this.getToken()
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${userToken}`
    })
    let editTodo = this._httpClient.post(environment.baseUrl + 'update/'+id, data, { headers: headers })

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

    return deleteTodo;
  }
}
