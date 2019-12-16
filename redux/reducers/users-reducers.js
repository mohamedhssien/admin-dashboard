import { FETCH_USERS, NEW_USERS, LAST_UPDATE } from "../types";

const initialState = {
    users: [],
    user: {}
}


export default function(state = initialState, action){
    switch(action.type) {
        case FETCH_USERS:
            //console.log('reducer')
         return {
             ...state,
             users: action.payload
         }
         case NEW_USERS :
             //console.log('ADASDASDSAD')
            return { 
                ...state,
                user: action.payload
          }
        default: 
        return state 
    }
}


