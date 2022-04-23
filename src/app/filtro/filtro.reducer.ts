import { createReducer, on } from "@ngrx/store";
import { filtrosValidos, setFiltro } from "./filtro.actions";

export const estadoInicial: string = 'todos';

export const filtroReducer = createReducer(estadoInicial,
    on(setFiltro, (state, {filtro})=> filtro));