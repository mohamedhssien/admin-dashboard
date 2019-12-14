import { combineReducers } from 'redux'
import usersReducer from './users-reducers'

//const usersreducer = usersReducer;

const  allReducers =  combineReducers( {
    users: usersReducer
} )

export default allReducers