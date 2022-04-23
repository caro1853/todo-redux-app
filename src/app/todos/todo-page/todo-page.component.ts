import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { completarTodos } from '../todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {

  
  chkMarcado: FormControl = new FormControl();

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.chkMarcado.valueChanges.subscribe(
      valor => { this.store.dispatch(completarTodos({completado: valor})); }
    );
  }

  
}
