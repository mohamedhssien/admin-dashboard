import React, { Component } from 'react'
import { connect } from "react-redux";
import PropTypes from 'prop-types'; 
import {  CreateUsers } from "../redux/actions/userActions";

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import Fab from '@material-ui/core/Fab';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
// import { Field, reduxForm } from 'redux-form'

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
    
    //  renderTextField(){
    //     return  ({
    //         label,
    //         input,
    //         meta: { touched, invalid, error },
    //         ...custom
    //       }) => (
    //         <TextField
    //           label={label}
    //           placeholder={label}
    //           error={touched && invalid}
    //           helperText={touched && error}
    //           {...input}
    //           {...custom}
    //         />
    //       )
    //  }


    render() {
        return (


    <div>
        <h3> add new user <ArrowDownwardIcon /></h3>
       
          <Fab color="primary" aria-label="add"  >
          <AddIcon onClick={ ()=>{ this.setState({ showCreateUserForm: true }) } } />
          </Fab>  
    {this.state.showCreateUserForm  && <form onSubmit={this.onSubmit}>
      <div>
      <TextField label="id" placeholder="id" name= 'id' onChange={(e)=>{ this.handleCreatUser(e) }} />
      </div>
      <div>
      <TextField label="name" placeholder="name" name= 'name' onChange={(e)=>{ this.handleCreatUser(e) }}  />
      </div>
      <div>
      <TextField label="user name" placeholder="user name" name= 'username'  onChange={(e)=>{ this.handleCreatUser(e) }}  />
      </div>  
      <Button
        variant="contained"
        color="primary"
        size="small"
        startIcon={<SaveIcon />}
        type="submit" value="Submit"
      >
        Save
      </Button>
     </form> } </div>




        // <div style={  {position : "absolute", width: "300px",height: "120px", marginLeft: '50%', padding: '100px'}  }> 
        //      <Fab color="primary" aria-label="add"  >
        //      <AddIcon onClick={ ()=>{ this.setState({ showCreateUserForm: true }) } } />
        //     </Fab>  
        //     {/* <button > create new User </button> */}
        //     { this.state.showCreateUserForm  && <form  onSubmit = {this.onSubmit}>
        //     <label >id</label><input  type="text" name="id"  onChange={(e)=>{ this.handleCreatUser(e) }} /><br></br>
        //     <label >Name</label><input  type="text" name="name"  onChange={(e)=>{ this.handleCreatUser(e) }}  />
        //     <label >User Name</label><input  type="text" name="username" onChange={(e)=>{ this.handleCreatUser(e) }}  />
        //     <input type="submit" value="Submit"  />
        //  </form> } 
      
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