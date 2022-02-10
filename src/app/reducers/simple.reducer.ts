import { Action } from '@ngrx/store';

export function simpleReducer(state:number = 0, action:Action){
    console.log(action.type,state);

    switch(action.type){
        case 'UP':
            return state = state+1;
        case 'DOWN':
            return state = -1;
        default:
            return state;
    }
}