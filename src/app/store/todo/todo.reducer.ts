import { createReducer, on } from "@ngrx/store";
import * as TodoAction from './todo.action';

export interface TodoModel {
    id: number,
    name: string,
    status: string
}

const initialState: Array<TodoModel> = [
    { id: 1, name: 'Task1', status: 'pending' }
]

export const todoReducer = createReducer(
    initialState,
    on(TodoAction.addItem,(state,action)=>{return [...state,action.data]}),
    on(TodoAction.removeItem,(state,action)=>{return state.filter(item=>item.id !==action.id)}),
    on(TodoAction.markAsComplete,(state,action)=>{
        return state.map(item =>
            item.id === action.id ? { ...item, status: 'Completed' } : item
          )
    }),
    
)