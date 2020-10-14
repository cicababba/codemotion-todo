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

  constructor(private http: HttpClient) { }


  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.url);
  }

}
