import React, { Component } from 'react'
import { connect } from "react-redux";
// import PropTypes from 'prop-types'; 
import {  CreateUsers, fetchUsers } from "../redux/actions/userActions";
import  Userform  from "./userForm";
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
import Fab from '@material-ui/core/Fab';
import { Grid } from '@material-ui/core';
import Box from '@material-ui/core/Box';
// import List from '@material-ui/core/List'
// import ListItem from '@material-ui/core/List'
import { List, ListItemText, ListItem } from '@material-ui/core'




class Users extends Component {
    constructor(props) {
        super(props)
        this.state = {
            last_edited_user: null,
            open: false, 
            setOpen: false,
            currentUser: '',
            users: null,
            last_updated_user: null,
            currentUserName: ''
        }

    }


    componentDidMount() {
        this.props.fetchUsers();
        //console.log(this.props.users)
         this.setState({ users: this.props.users })
    }   
    
    componentWillReceiveProps(nextProps){
        if(nextProps.newUser){
            //console.log(nextProps.newUser)
            this.props.users.unshift(nextProps.newUser)
        }
    }


    handleChange = (e, user) => {
        user.username = e.target.value
       this.setState({ last_edited_user: user })
       console.log(this.state.last_edited_user)

    }
    deleteUser = (e, user, i) => {
        console.log(i)
        console.log(this.props.users)
        this.props.users.splice(i, 1)
        console.log(this.props.users)
        this.setState({users: this.props.users })
        console.log(this.state.users)

    
    } 

    
     handleClose = () => {
        this.setState({ open: false }) 
      };

      updateUser = (e, user) => {
        this.setState({ open: true })
        console.log(user.id)
        this.setState({ currentUserName: user.username })
        console.log(user)
        this.props.users.push(user)
        this.setState({users: this.props.users })
      }

    render() {
        return(
            
                
        <Grid container style={{ marginTop: 50}}>
            <Grid item sm ={ 8   }>
                
            {
                this.props.users.map((user, i) => (
                   
                    <List  key = {i}>
                   <Box  p={1} m={1} bgcolor="#f9fbe7">  <ListItemText  
                        primary = "name" secondary = {user.name} 
                    /> </Box>

                    <Box  p={1} m={1} bgcolor="#f9fbe7"> <ListItemText   
                       primary = "First Name" secondary = {user.username} 
                    /> </Box>
                    
                <Fab color="primary" aria-label="edit" onClick={(e) => this.updateUser(e, user)}>
                    <EditIcon />
                </Fab>
                <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">change user name </DialogTitle>
                    <div >
                    <DialogContent>
                        <TextField onChange={(e) =>  this.handleChange(e, user)}
                            autoFocus
                            margin="dense"
                            name="username"
                            defaultValue={ this.state.currentUserName }
                            type="text"
                            fullWidth
                           
                        />

                        
                    </DialogContent>
                    </div>
                    <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={ this.handleClose} color="primary">
                        save
                    </Button>
                    </DialogActions>
                </Dialog>
                <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<DeleteIcon />}
                    onClick = { (e)=> this.deleteUser(e, user, i) }
                    >
                    Delete
                    </Button>
                </List>   
                            ))
                        } 
                    </Grid> 
                     <Grid item sm bgcolor="e0e0e0">
                        <Box   component="span" display="block" p={1} m={1} bgcolor="#e0e0e0" height= '100%'>
                        <Userform   />
                        </Box>
                     </Grid>
                </Grid>
                                
             
            
        )
    }
}


const mapStateToProps = (state) => ({
    users: state.users.users,
    newUser: state.users.user
})

export default connect(mapStateToProps, {fetchUsers})(Users)