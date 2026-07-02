import { createAction, props } from "@ngrx/store";
import { TodoModel } from "./todo.reducer";

export const addItem = createAction('[TODO] Add item',props<{data : TodoModel}>());
export const removeItem = createAction('[TODO] Remove item',props<{id : number}>());
export const markAsComplete = createAction('[TODO] Mark As COmplete',props<{id : number}>());
export const getAllTodos = createAction('[TODO] Get All Todo')