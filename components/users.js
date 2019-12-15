import Layout from './layout'
import React, { Component } from 'react'
import Popup from "reactjs-popup"
import { connect } from "react-redux";
import PropTypes from 'prop-types'; 
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




class Users extends Component {
    constructor(props) {
        super(props)
        this.state = {
            last_edited_user: null,
            open: false, 
            setOpen: false
        }

    }


    componentDidMount() {
        this.props.fetchUsers();
        console.log(this.props.users)
    }   
    
    componentWillReceiveProps(nextProps){
        if(nextProps.newUser){
            console.log(nextProps.newUser)
            this.props.users.unshift(nextProps.newUser)
        }
    }


    handleChange = (e, user) => {
        user.username = e.target.value
       this.setState({ last_edited_user: user })
       console.log(this.state.last_edited_user)

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

     handleClickOpen = () => {
         this.setState({ open: true })
      };
    
     handleClose = () => {
        this.setState({ open: false }) 
      };

    render() {
        return(
            
                
        <Grid container style={{ marginTop: 50}}>
            <Grid item sm ={ 8   }>
                
            {
                this.props.users.map((user, i) => (
                    // <Box component="span" display="block" p={1} m={1} bgcolor="background.paper">
                    //     block
                    // </Box>
                    <Box  key={i} component="span" display="block" p={1} m={1} bgcolor="#f3e5f5">
                    <Box  p={1} m={1}>Name : {user.name} </Box>
                    <Box p={1} m={1}>User Name : {user.username}</Box>
                    {/* <textarea onChange={(e) =>  this.handleChange(e, user) } value = { user.username}></textarea> */}
                    
                <Fab color="primary" aria-label="edit" onClick={this.handleClickOpen}>
                    <EditIcon />
                </Fab>
                <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">user name </DialogTitle>
                    <div >
                    <DialogContent>
                    <DialogContentText>
                        change user name
                    </DialogContentText>
                        <TextField onChange={(e) =>  this.handleChange(e, user) } 
                        autoFocus
                        margin="dense"
                        value = { user.username}
                        fullWidth
                    />
                    </DialogContent>
                    </div>
                    <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={this.handleClose} color="primary">
                        save
                    </Button>
                    </DialogActions>
                </Dialog>
                <Button
                    variant="contained"
                    color="secondary"
                    //  className={classes.button}
                    startIcon={<DeleteIcon />}
                    >
                    Delete
                    </Button>
                </Box>    
                            ))
                        } 
                        </Grid> 
                        <Grid item sm>
                        <Box   component="span" display="block" p={1} m={1} bgcolor="#f3e5f5" height= '98%'>
                        <Userform   />
                        </Box>
                        </Grid>
                        </Grid>
                                
             
            
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