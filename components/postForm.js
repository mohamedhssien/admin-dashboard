import React, { Component } from 'react'
import { connect } from "react-redux";
import PropTypes from 'prop-types'; 
import {  CreatePost } from "../redux/actions/postActions";
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

class PostForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: null,
            title: null,
            body: null,
            showCreatePostForm: false
        }
    }

     handleCreatPost = (e) => {
        //const { newUser } = this.state
        this.setState({ [e.target.name] : e.target.value })
        
     }

     onSubmit = (e) =>{
        e.preventDefault();

        const post = {
            id: this.state.id,
            title: this.state.title,
            body: this.state.body
        }

        this.props.CreatePost(post)
     }
    

    render() {
        return (


            <div>
                <h3> add new post </h3>
            
                <Fab color="primary" aria-label="add"  >
                <AddIcon onClick={ ()=>{ this.setState({ showCreatePostForm: true }) } } />
                </Fab>  
            {this.state.showCreatePostForm  && <form onSubmit={this.onSubmit}>
            <div>
            <TextField label="id" placeholder="id" name= 'id' onChange={(e)=>{ this.handleCreatPost(e) }} />
            </div>
            <div>
            <TextField label="title" placeholder="title" name= 'title' onChange={(e)=>{ this.handleCreatPost(e) }}  />
            </div>
            <div>
            <TextField multiline = {true} rows = '10' label="your post here " placeholder="post" name= 'body'  onChange={(e)=>{ this.handleCreatPost(e) }}  />
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


const mapStateToProps = (state) => ({
    posts: state.posts.posts
})

export default  connect(mapStateToProps, {CreatePost})(PostForm)