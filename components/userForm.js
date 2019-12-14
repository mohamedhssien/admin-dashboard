import React, { Component } from 'react'
import { connect } from "react-redux";
import PropTypes from 'prop-types'; 
import {  CreateUsers } from "../redux/actions/userActions";

class UserForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: null,
            name: null,
            username: null,
            showCreateUserForm: false
        }
    }

     handleCreatUser = (e) => {
        //const { newUser } = this.state
        this.setState({ [e.target.name] : e.target.value })
        
     }

     onSubmit = (e) =>{
        e.preventDefault();

        const user = {
            id: this.state.id,
            name: this.state.name,
            username: this.state.username
        }

        this.props.CreateUsers(user)
     }
    

    render() {
        return (
        <div style={  {position : "absolute", width: "300px",height: "120px", marginLeft: '50%', padding: '100px'}  }>   
            <button onClick={ ()=>{ this.setState({ showCreateUserForm: true }) } }> create new User </button>
            { this.state.showCreateUserForm  && <form  onSubmit = {this.onSubmit}>
            <label >id</label><input  type="text" name="id"  onChange={(e)=>{ this.handleCreatUser(e) }} /><br></br>
            <label >Name</label><input  type="text" name="name"  onChange={(e)=>{ this.handleCreatUser(e) }}  />
            <label >User Name</label><input  type="text" name="username" onChange={(e)=>{ this.handleCreatUser(e) }}  />
            <input type="submit" value="Submit"  />
         </form> }
</div> 
        )
    }
}

UserForm.PropTypes = {
    CreateUsers: PropTypes.func.isRequired
}
const mapStateToProps = (state) => ({
    users: state.users.users
})

export default  connect(mapStateToProps, {CreateUsers})(UserForm)