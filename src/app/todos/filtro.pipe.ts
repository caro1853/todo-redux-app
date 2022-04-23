import { Pipe, PipeTransform } from '@angular/core';
import { filtrosValidos } from '../filtro/filtro.actions';
import { Todo } from './models/todo.model';

@Pipe({
  name: 'filtroTodos',
  pure: false
})
export class FiltroPipe implements PipeTransform {

  transform(todos: Todo[], filtro: string): Todo[] {
    
    switch(filtro){
      case 'completados': 
        return todos.filter(p=>p.completado);
      case 'pendientes': 
        return todos.filter(p=>!p.completado);
    }

    return todos;
  }

}
