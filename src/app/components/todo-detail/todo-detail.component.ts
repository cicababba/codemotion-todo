import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {

  exampleTodo: Todo;

  constructor() {
    this.exampleTodo = {
      name: "Todo di esempio",
      completed: false,
      content: "Contenuto del Todo, lorem ipsum...",
    };
  }

  ngOnInit(): void {
  }

}
