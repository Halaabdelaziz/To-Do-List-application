import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  todo!: number;

  constructor(private _TodoService: TodoService, private _Router: Router) { }

  ngOnInit(): void {
    this.getAllTodo();
  }
  getAllTodo() {
    this._TodoService.getTodo().subscribe(
      (res) => {
        this.todoLsit = res;

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

        this.todo = res.id;
        console.log(this.todo);

      }, (err) => {
        console.log(err);

      });
  }

  editForm: FormGroup = new FormGroup({
 
    name: new FormControl(null),
    description: new FormControl(null),
    start_date: new FormControl(null),
    status: new FormControl(null),
  });

  addForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required]),
    start_date: new FormControl(null, [Validators.required]),
    status: new FormControl(null, [Validators.required]),
  });

  submitForm(editForm: FormGroup) {
    this._TodoService.editItem(editForm.value,this.todo).subscribe((res) => {
      this.getAllTodo();
      console.log(res);

    }, (err) => {
      console.log(err);
    }, () => { });
  }
  submitAddForm(addForm: FormGroup) {
    this._TodoService.addItem(addForm.value).subscribe((res) => {
      this.getAllTodo();
      console.log(res);
      
    }, (err) => {
      console.log(err);
    }, () => { });

  }
  // redirecttodash() {
  //   window.location.reload();
  // }
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

