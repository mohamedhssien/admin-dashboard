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

        )
    }
}

// UserForm.PropTypes = {
//     CreateUsers: PropTypes.func.isRequired
// }
const mapStateToProps = (state) => ({
    users: state.users.users
})

export default  connect(mapStateToProps, {CreateUsers})(UserForm)