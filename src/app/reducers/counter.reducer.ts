import * as CounterActions from '../actions/counter.actions';
import { Counter } from '../models/counter.model';
import { Product } from '../products/products.component';

export type Action = CounterActions.All;

let defaultState: Counter = {
    count: 0
}

const newState = (state,newData) => {
    return Object.assign({},state,newData);
}

export function counterReducer(state:Counter = returnLenght(), action:Action){
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
function returnLenght(): Counter {
    let cartProducts: Product[] = JSON.parse(localStorage.getItem("cartProducts"));
    if(cartProducts !== null){
        defaultState.count = cartProducts.length
    }
    return defaultState;
}
