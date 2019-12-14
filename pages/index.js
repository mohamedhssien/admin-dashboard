import Fetch from 'isomorphic-unfetch';
import React, { Component } from 'react'
import Layout from '../components/layout'
import Comments from './comments'
import Link from 'next/link';
import Popup from "reactjs-popup"
import Posts from "../components/posts";


class Index extends Component {
    constructor(props) {
        super(props)

        // this.state = {
        //     posts : [],
           
        //     title: null,
        //     body: null, 
        //     id: null,
        //     newPost: {
        //       title: null,
        //       body: null, 
        //       id: null,
        //     },
        //     editOne: null,
        //     updatedPost : null,
        //     showCreatePostForm: false
        // }
    }
 
   

    //  deletePost = (e, post, i) => {
    //      const { posts } = this.state
    //      console.log(post.id)
    //      posts.splice(i, 1);
    //      this.setState({ posts: posts })
    //  } 

    //  creatPost = (e) => {
    //      //const { newPost } = this.state.newPost
    //     this.setState({ [e.target.name] : e.target.value })
    //     const  id = this.state.id
    //     const title = this.state.title
    //     const body = this.state.body
    //     const newPost = {
    //         id: id,
    //         title: title,
    //         body: body
    //     }

    //     this.setState({ newPost : newPost })
        
    // }
    
    // buCreatePost = (event) => {
    //     event.preventDefault();
    //     const { posts, newPost } = this.state
    //     console.log(posts)
    //     posts.push(newPost)
    //     this.setState({ posts })
    //     console.log(newPost)
    //  }

    render() {
        
        

        return (
            <Layout>
           {/* /* <div style={  {position : "absolute", width: "300px",height: "120px", marginLeft: '50%', padding: '100px'}  }>   
             <button onClick={ ()=>{ this.setState({ showCreatePostForm: true }) } }> create new post </button>
            { this.state.showCreatePostForm  && <form >
               <label >id</label><input  type="text" name="id" onChange={(e)=>{ this.creatPost(e) }}  /><br></br>
                <label >title</label><input  type="text" name="title" onChange={(e)=>{ this.creatPost(e) }}   />
                <textarea name="body" onChange={(e)=>{ this.creatPost(e) }} style={  {padding: '20px'}  }></textarea>
                <input type="submit" value="Submit"  onClick={ this.buCreatePost } />
               </form> } */}

               <h1> please click the links above </h1>
            
        </Layout>
        )
    }
}

export default Index