import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions'

export interface StateModel{
  counter : number;
  todos : any
}
export const initialState : StateModel = {
  counter : 0,
  todos : []
};

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => { return {...state ,counter : state.counter + 1}}),
  on(decrement, (state) => { return {...state ,counter : state.counter - 1}}),
  on(reset, (state) => { return {...state ,counter : 0}}),
);
