import { Action } from "@ngrx/store";

export function roleReducer(state: string = 'anonim', action: Action){
    switch(action.type){
        case 'User':
            return state = 'User';
        case 'Admin':
            return state = 'Admin';
        default: 
            return state;

    }

}