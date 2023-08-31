import { Action, createReducer, on } from "@ngrx/store";
//import { CounterActions, IncrementAction } from "./counter.action";
import { decrement, increment, set } from "./counter.action";

const initialState = 0;

export const counterReducer = createReducer(
    initialState,
    on(increment, (state, action) => state + action.value),
    on(decrement, (state, action)=> state - action.value),
    on(set, (state, action) => action.value),
);



// export function counterReducer(state = initialState, action: CounterActions | Action) {

//     if(action.type ==='[Counter] Increment'){
//         return state + (action as IncrementAction).value;
//     }
//     return state;
//    }