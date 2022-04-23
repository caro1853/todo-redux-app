import { createReducer, on } from "@ngrx/store";
import { Todo } from "./models/todo.model";
import * as actions from "./todo.actions";

export const estadoInicial: Todo[] = [
    new Todo('Salvar al mundo')
];

export const todoReducer = createReducer(estadoInicial,
    on(actions.crear, (state, {texto}) => [...state, new Todo( texto )]),
    on(actions.toggle, (state, {id}) => {
        return state.map(todo =>{
            if(todo.id === id){
                return{
                    ...todo,
                    completado: !todo.completado
                }
            }else{
                return todo;
            }
        })
    }),
    on(actions.editar, (state, {id, texto}) => {
        return state.map(todo => {
            if(todo.id === id){
                return{
                    ...todo,
                    texto: texto
                }
            }
            else{
                return todo;
            }
        })
    }),
    on(actions.borrar, (state, {id}) => state.filter(p=>p.id !== id)),
    on(actions.completarTodos, (state, {completado}) => {
        return state.map(todo =>{            
            return{
                 ...todo,
                 completado: completado
            }            
        })
    }),
    on(actions.limpiarCompletados, (state) => {
        return state.filter(p=>!p.completado)
    })
)