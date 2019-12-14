import { combineReducers } from 'redux'
import usersReducer from './users-reducers'
import postsReducer from "./posts-reducer";

//const usersreducer = usersReducer;

const  allReducers =  combineReducers( {
    users: usersReducer,
    posts: postsReducer
} )

export default allReducers