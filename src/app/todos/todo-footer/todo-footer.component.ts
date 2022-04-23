import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actionsFiltro from 'src/app/filtro/filtro.actions';
import { AppState } from '../app.reducer';
import { limpiarCompletados } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  filtrosDefinidos: actionsFiltro.filtrosValidos[] = ['todos', 'completados', 'pendientes'];
  filtroActual:string = 'todos';
  pendientes: number = 0;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {

    this.store.subscribe(
      state => {
        this.filtroActual = state.filtro;
        this.pendientes = state.todos.filter(p=>p.completado === false).length;
      }
    );

    /*this.store.select('filtro').subscribe(
      state=> {
        this.filtroActual = state;
        console.log("footer " + state);
      }
    );*/
  }

  setFiltro(filtro: string){
    this.store.dispatch(actionsFiltro.setFiltro({filtro: filtro}));
  }

  clearCompleted()
  {
    this.store.dispatch(limpiarCompletados());
  }
}
