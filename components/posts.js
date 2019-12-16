import Layout from './layout'
import React, { Component } from 'react'
import { connect } from "react-redux";
import   { fetchPosts }  from "../redux/actions/postActions";
import  PostForm  from "./postForm";
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




class Posts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            currentPostBody: '',
            last_edited_post: null,
            open: false, 
            setOpen: false,
        }

    }


    componentDidMount() {
        this.props.fetchPosts();
        console.log(this.props.posts)
       
     this.setState({ posts: this.props.posts })
    }   
    
    componentWillReceiveProps(nextProps){
        if(nextProps.newPost){
            console.log(nextProps.newPost)
            this.props.posts.unshift(nextProps.newPost)
        }
    }


    handleChange = (e, post) => {
        post.body = e.target.value
       this.setState({ last_edited_post: post })
       console.log(this.state.last_edited_post)

    }
    deletePost = (e, post, i) => {
        console.log(i)
        console.log(this.props.posts)
        this.props.posts.splice(i, 1)
        console.log(this.props.posts)
        this.setState({posts: this.props.users })
        console.log(this.state.users)

    
    } 

    
     handleClose = () => {
        this.setState({ open: false }) 
      };

      updatePost = (e, post) => {
        this.setState({ open: true })
        console.log(post.id)
        this.setState({ currentPostBody: post.body })
        console.log(post)
        this.props.posts.push(post)
        this.setState({posts: this.props.posts })
      }

    render() {
        return(
            
                
        <Grid container style={{ marginTop: 50}}>
            <Grid item sm ={ 8   }>
                
            {
                this.props.posts.map((post, i) => (
                   
                    <Box  key={i} component="span" display="block" p={1} m={1} bgcolor="#e0e0e0">
                    <Box  p={1} m={1} bgcolor="#f9fbe7"><h3> {post.title} </h3></Box>
                    <Box p={1} m={1} bgcolor="#f9fbe7"> {post.body}</Box>
                    
                <Fab color="primary" aria-label="edit" onClick={(e) => this.updatePost(e, post)}>
                    <EditIcon />
                </Fab>
                <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">change post body </DialogTitle>
                    <div >
                    <DialogContent>
                        <TextField onChange={(e) =>  this.handleChange(e, post)}
                            margin="dense"
                            name="post body"
                            defaultValue={ this.state.currentPostBody }
                            multiline = {true}
                            rows = '10'                         
                           
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
                     onClick = { (e)=> this.deletePost(e, post, i) }
                    >
                    Delete
                    </Button>
                </Box>    
                            ))
                        } 
                    </Grid> 
                     <Grid item sm bgcolor="e0e0e0">
                        <Box   component="span" display="block" p={1} m={1} bgcolor="#e0e0e0" height= '100%'>
                        <PostForm   />
                        </Box>
                     </Grid>
                </Grid>
                                
             
            
        )
    }
}

const mapStateToProps = (state) => ({
    posts: state.posts.posts,
    newPost: state.posts.post
})

export default connect(mapStateToProps, {fetchPosts})(Posts)
