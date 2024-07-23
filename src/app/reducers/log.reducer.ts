import { Action } from "@ngrx/store";

export function logReducer(state: boolean = false, action: Action){
    switch(action.type){
        case 'Login':
            return state = true;
        default: 
            return state;

    }

}