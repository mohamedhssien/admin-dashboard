import { FETCH_USERS, NEW_USERS, LAST_UPDATE } from "../types";
//import { actions } from "../actions/userActions";
// import { last_updated_user } from "../../components/users";

const initialState = {
    users: [],
    user: {}
}


export default function(state = initialState, action){
    switch(action.type) {
        case FETCH_USERS:
            console.log('reducer')
         return {
             ...state,
             users: action.payload
         }
         case NEW_USERS :
             console.log('ADASDASDSAD')
            return { 
                ...state,
                user: action.payload
          }
        default: 
        return state 
    }
}






// import React, { Component } from 'react'

// class Usersreducers extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
            
//         }
//     }
//     static async getInitialProps(){
//         const res = await fetch('http://jsonplaceholder.typicode.com/users');
//         const data = await res.json();
//         console.log(data)
//         return { users: data }
//     }

//     // render() {
//     //     return (
            
//     //     )
//     // }
// }

// export default Usersreducers
