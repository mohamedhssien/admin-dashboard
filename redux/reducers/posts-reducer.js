import { FETCH_POSTS } from "../types";

const initialState = {
    posts: [],
    post: {}
}


export default function(state = initialState, action){
    switch(action.type) {
        case FETCH_POSTS:
            console.log('reducer')
         return {
             ...state,
             posts: action.payload
         }
        //  case NEW_USERS :
        //      console.log('ADASDASDSAD')
        //     return { 
        //         ...state,
        //         user: action.payload
        //   }
        default: 
        return state 
    }
}
