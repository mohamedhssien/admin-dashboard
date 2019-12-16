import { FETCH_POSTS, NEW_POST } from "../types";

const initialState = {
    posts: [],
    post: {}
}


export default function(state = initialState, action){
    switch(action.type) {
        case FETCH_POSTS:
            //console.log('reducer')
         return {
             ...state,
             posts: action.payload
         }
         case NEW_POST :
             //console.log('REDUCER   POST')
            return { 
                ...state,
                post: action.payload
          }
        default: 
        return state 
    }
}
