import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { allContactResponse, todo } from '../_models/todo.model';
import { TodoService } from '../_services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todoLsit: any = [];
  todo!: object;
  constructor(private _TodoService: TodoService, private _Router: Router) { }

  ngOnInit(): void {
    this.getAllTodo();
  }
  getAllTodo() {
    this._TodoService.getTodo().subscribe(
      (res) => {
        this.todoLsit = res;
        console.log(this.todoLsit);
      },
      (err) => {
        console.log(err);
      },
      () => { }
    )
  }
  getTodoById(id: number) {
    this._TodoService.getTodoById(id).subscribe(
      (res) => {
        console.log(res.id)
        this.todo = res;
        console.log(this.todo)
      });
  }

  editForm: FormGroup = new FormGroup({
    name: new FormControl(),
    description: new FormControl(),
    start_date: new FormControl(),
    status: new FormControl(),
  });

  submitForm(editForm: FormGroup) {
    this._TodoService.editItem(editForm.value).subscribe((res) => {
      console.log(res);

    }, (err) => {
      console.log(err);
    }, () => { });
  }
  redirecttodash() {
    window.location.reload();
  }
  delete(id: number) {
    this._TodoService.deleteItem(id).subscribe((res) => {
      this.getAllTodo();
      console.log(res);
    }, (err) => {
      console.log(err);
    }, () => { })
    console.log(id);


  }
}

