import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoDetailComponent } from './components/todo-detail/todo-detail.component';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes: Route[] = [
  {
    path: "todos/list",
    component: TodoListComponent
  },
  {
    path: "todos/detail",
    component: TodoDetailComponent
  },
];



@NgModule({
  declarations: [
    TodoListComponent,
    TodoDetailComponent,
  ],
  exports: [
    TodoListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class TodoModule { }
