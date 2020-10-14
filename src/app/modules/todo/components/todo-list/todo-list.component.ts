import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from '../../models/Todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];

  constructor(private todoService: TodoService, private router: Router) { }

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos() {
    this.todoService.getTodos().subscribe((res: Todo[]) => {
      this.todos = res;
    });
  }


  insertTodo() {
    this.todoService.insertTodo().subscribe((res: any) => {
      //this.todos = res;
    },
      res => {
        alert(`${res.status} - ${res.error.error}`);
        this.router.navigate(["todos"]);
      });
  }

  removeTodo() {
    this.todoService.deleteTodo().subscribe((res: any) => {
      //this.todos = res;
    },
      res => {
        alert(`${res.status} - ${res.error.error}`);
      });
  }

}
