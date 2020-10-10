import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BaseLayoutComponent } from './containers/base-layout/base-layout.component';
import { TodoListComponent } from './modules/todo/components/todo-list/todo-list.component';
import { TodoDetailComponent } from './modules/todo/components/todo-detail/todo-detail.component';
import { TodoListItemComponent } from './modules/todo/components/todo-list-item/todo-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseLayoutComponent,
    TodoListComponent,
    TodoDetailComponent,
    TodoListItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
