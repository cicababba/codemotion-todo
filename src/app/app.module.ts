import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BaseLayoutComponent } from './containers/base-layout/base-layout.component';
import { TodoModule } from './modules/todo/todo.module';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from './modules/shared/shared.module';


const routes: Route[] = [
  {
    path: 'todos',
    loadChildren: () => import('./modules/todo/todo.module').then(m => m.TodoModule)
  }
];

@NgModule({
  declarations: [
    AppComponent,
    BaseLayoutComponent
  ],
  imports: [
    BrowserModule,
    TodoModule,
    SharedModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
