import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { Todo } from '../models/todo.model';
import { FiltroPipe } from '../filtro.pipe';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];
  filtroActual: string = "todos";
  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.store.select("todos").subscribe(
      todos => this.todos = todos
    );

    this.store.select("filtro").subscribe(
      filtro => this.filtroActual = filtro
    );
  }

}
