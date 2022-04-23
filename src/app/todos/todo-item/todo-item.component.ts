import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { Todo } from '../models/todo.model';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo:Todo = new Todo('');
  @ViewChild('InputFisico') txtInputFisico!: ElementRef;
  chkCompletado: FormControl = new FormControl();
  txtInput: FormControl= new FormControl();
  editando: boolean= false;
  
  constructor(private store: Store<AppState>) { 
    
  }

  ngOnInit(): void {
    this.chkCompletado = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);

    this.chkCompletado.valueChanges.subscribe(
      valor => { 
        console.log("chkCompletado: " + valor); 
        this.store.dispatch(actions.toggle({id: this.todo.id}))
      }
    )
  }

  editar()
  {
    this.editando = true;
    this.txtInput.setValue(this.todo.texto);
    setTimeout(() => {
      this.txtInputFisico.nativeElement.select();
    }, 1);    
  }

  terminarEdicion(){
    this.editando = false;
    if(this.txtInput.valid && this.todo.texto !== this.txtInput.value){
      this.store.dispatch(actions.editar({id: this.todo.id, texto: this.txtInput.value}));
    }
  }

  borrar(){
    this.store.dispatch(actions.borrar({id: this.todo.id}));
  }
}
