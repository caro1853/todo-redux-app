import { createAction, props } from "@ngrx/store";
import { Todo } from "./models/todo.model";

export const crear = createAction('[TODO] Crea todo',
    props<{texto:string}>()
);

export const toggle = createAction('[TODO] Toggle todo',
    props<{id:number}>()
);

export const editar = createAction('[TODO] Editar todo',
    props<{id: number, texto: string}>()
);

export const borrar = createAction('[TODO] Borrar todo',
    props<{id: number}>()
);

export const completarTodos = createAction('[TODO] CompletarTodos todo',
    props<{completado: boolean}>()
);

export const limpiarCompletados = createAction('[TODO] LimpiraCompletados todo');