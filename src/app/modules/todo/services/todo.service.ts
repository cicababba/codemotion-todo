import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Todo } from '../models/Todo';
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  //CHIAMATA CON METODO GET 
  private url = "https://run.mocky.io/v3/0e18062f-33df-48c6-83d9-eed4e9cc7302";

  //CHIAMATA CON METODO GET CHE RESTITUISCE 401
  private addTodo = "https://run.mocky.io/v3/a271a050-32c9-454c-b8f6-3ac392e2e46d";

  //CHIAMATA CON METODO GET CHE RESTITUISCE 500
  private removeTodo = "https://run.mocky.io/v3/c981da05-faa8-4523-8f16-a221b5b6ce5a";


  constructor(private http: HttpClient) { }


  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.url);
  }

  insertTodo(): Observable<any> {
    return this.http.post(this.addTodo, null);
  }

  deleteTodo(): Observable<any> {
    return this.http.delete(this.removeTodo);
  }
}
