import * as CounterActions from '../actions/counter.actions';
import { Counter } from '../models/counter.model';

export type Action = CounterActions.All;

const defaultState: Counter = {
    count: 0
}

const newState = (state,newData) => {
    return Object.assign({},state,newData);
}

export function counterReducer(state:Counter = defaultState, action:Action){
    // console.log(action.type,state)

    switch(action.type){
        case CounterActions.UPVOTE:
            return newState(state, {count : state.count + 1});

        case CounterActions.DOWNVOTE:
            return newState(state, {count: state.count -1 });
        default:
            return defaultState;
    }
}