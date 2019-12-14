import { FETCH_USERS, NEW_USERS, LAST_UPDATE } from "../types";

// import { last_updated_user } from "../../components/users";

export function fetchUsers() {
    return function(dispatch){
        //console.log('fetching')
        fetch('http://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(users  => dispatch({
            type: FETCH_USERS,
            payload: users
        }))
    }
}


export function CreateUsers(users) {
    return function(dispatch){
        console.log('action called')
        fetch('http://jsonplaceholder.typicode.com/users', {
            method: 'POST', 
            headers: {
            'content-type': 'application/json'
            },
            body: JSON.stringify(users)
        })
        .then(res  => res.json())
        .then(user  => dispatch({
            type: NEW_USERS,
            payload: user
        }))
        
    }
}