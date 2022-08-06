import { Component, OnInit } from '@angular/core';
import { TodoService } from '../_services/todo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _TodoService:TodoService) { }

  ngOnInit(): void {
   
  }

}
