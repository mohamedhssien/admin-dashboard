import Layout from './layout'
import React, { Component } from 'react'
import Popup from "reactjs-popup"
import { connect } from "react-redux";
import PropTypes from 'prop-types'; 
import {  fetchUsers } from "../redux/actions/userActions";
// import { CreateUsers } from '../redux/actions/userActions'

import  Userform  from "./userForm";

class Users extends Component {
    constructor(props) {
        super(props)
        this.state = {
            last_edited_user: null
        }

        // this.state = {
        //     users: [],
        //     last_edited_user: null,
        //     showCreateUserForm: false,
        //     id: null,
        //     name: null,
        //     username: null,
        //     newUser: {
        //         id: null,
        //         name: null,
        //         username: null
        //     }
        }

    componentWillMount() {
        // let {users} = this.props;
        // this.setState({users});
        this.props.fetchUsers();
        console.log(this.props.users)
    }   
    
    componentWillReceiveProps(nextProps){
        if(nextProps.newUser){
            console.log(nextProps.newUser)
            this.props.users.unshift(nextProps.newUser)
        }
    }

    // static async getInitialProps(){
    //     const res = await fetch('http://jsonplaceholder.typicode.com/users');
    //     const data = await res.json();
    //     return { users: data }
    // }

    handleChange = (e, user) => {
        user.username = e.target.value
       //console.log( user )
       this.setState({ last_edited_user: user })
    //    const  last_edited_user = user
       console.log(this.state.last_edited_user)
    //    const lastapp = this.state.last_edited_user
    //    this.props.CreateUsers(lastapp)
    }
    // deleteUser = (e, user, i) => {
    //     const { users } = this.state
    //     console.log(user.id)
    //     users.splice(i, 1);
    //     this.setState({ users: users })
    // } 

    // handleCreatUser = (e) => {
    //     //const { newUser } = this.state
    //     this.setState({ [e.target.name] : e.target.value })
        
    //     const newUser = {
    //         id: this.state.id,
    //         name: this.state.name,
    //         username: this.state.username
    //     }

    //     this.setState({ newUser : newUser })
    // }

    // buCreateUser = (event) => {
    //     event.preventDefault();
    //     const { newUser, users } = this.state
    //     users.push(newUser)
    //     this.setState({ users })
    //     console.log(newUser)
    //  }

    render() {
        
        // let { users } = this.state
        // console.log(users)
        // return (
        //     <Layout>
        //     <div style={  {position : "absolute", width: "300px",height: "120px", marginLeft: '50%', padding: '100px'}  }>   
        //      <button onClick={ ()=>{ this.setState({ showCreateUserForm: true }) } }> create new User </button>
        //     { this.state.showCreateUserForm  && <form >
        //        <label >id</label><input  type="text" name="id" onChange={(e)=>{ this.handleCreatUser(e) }}  /><br></br>
        //         <label >Name</label><input  type="text" name="name" onChange={(e)=>{ this.handleCreatUser(e) }}   />
        //         <label >User Name</label><input  type="text" name="username" onChange={(e)=>{ this.handleCreatUser(e) }}   />
        //         <input type="submit" value="Submit"  onClick={ this.buCreateUser } />
        //        </form> }
        //     </div>  
        //         {
        //                 users.map((user, i) => (
        //                     <div  key={i} >
        //                     <h3 >Name : {user.name} </h3>
        //                     <h4 >User Name : {user.username}</h4>
                        
                            
        //     <Popup trigger={<button >update user name</button>}
        //         position="right center">
        //         <div>
        //             <textarea onChange={(e) =>  this.handleChange(e, user) }>{user.username}</textarea>
        //         </div>
        //             <button >save</button>
        //     </Popup>

        //     <button onClick={ (e) => this.deleteUser(e, user, i) }> delete user</button>    

        //    </div>
        //             ))
        //         }
        return(
            
                <div> 
                <Userform />
                    {
                        this.props.users.map((user, i) => (
                            <div  key={i} >
                            <h3 >Name : {user.name} </h3>
                            <h4 >User Name : {user.username}</h4>
                           
                <Popup trigger={<button >update user name</button>}
                    position="right center">
                    <div>
                     <textarea onChange={(e) =>  this.handleChange(e, user) } value = { user.username}></textarea>
                    </div>
                        <button >save</button>
                </Popup>

                <button > delete user</button>
                </div>    
                ))
            }  
            </div>
                    
                      
             
            
        )
    }
}

Users.PropTypes = {
    fetchUsers: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired,
    newUser: PropTypes.object 
}

const mapStateToProps = (state) => ({
    users: state.users.users,
    newUser: state.users.user
})

export default connect(mapStateToProps, {fetchUsers})(Users)