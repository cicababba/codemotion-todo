import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoDetailComponent } from './components/todo-detail/todo-detail.component';
import { TodoListItemComponent } from './components/todo-list-item/todo-list-item.component';



@NgModule({
  declarations: [
    TodoListComponent,
    TodoDetailComponent,
    TodoListItemComponent
  ],
  exports: [
    TodoListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TodoModule { }
