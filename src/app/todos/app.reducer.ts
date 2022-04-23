import { ActionReducerMap } from "@ngrx/store";
import { filtroReducer } from "../filtro/filtro.reducer";
import { Todo } from "./models/todo.model";
import { todoReducer } from "./todo.reducer";

export interface AppState {
    todos: Todo[],
    filtro: string
}

export const appReducers: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filtro: filtroReducer
}