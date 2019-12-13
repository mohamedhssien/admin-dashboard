import Fetch from 'isomorphic-unfetch';
import React, { Component } from 'react'
import Layout from '../components/layout'
import Comments from './comments'
import Link from 'next/link';
import Popup from "reactjs-popup"

class Index extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts : [],
           
            title: null,
            body: null, 
            id: null,
            newPost: {
              title: null,
              body: null, 
              id: null,
            },
            editOne: null,
            updatedPost : null,
            showCreatePostForm: false
        }
    }
    componentDidMount() {
        let {posts} = this.props;
        this.setState({posts});
    }    

    static async getInitialProps(){
        const res = await fetch('http://jsonplaceholder.typicode.com/posts');
        const data = await res.json();
        return { posts: data }
    }

    

    updatePost(post) {
        let {editOne } = this.state;
        this.setState({editOne : post.id});
    }

    handleChange = (e, post) => {
        post.body = e.target.value;
        this.setState({updatedPost: post});
    }

    submitPost = () => {  
        this.setState({  editOne: null })
     } 

     deletePost = (e, post, i) => {
         const { posts } = this.state
         console.log(post.id)
         posts.splice(i, 1);
         this.setState({ posts: posts })
     } 

     creatPost = (e) => {
         //const { newPost } = this.state.newPost
        this.setState({ [e.target.name] : e.target.value })
        const  id = this.state.id
        const title = this.state.title
        const body = this.state.body
        const newPost = {
            id: id,
            title: title,
            body: body
        }

        this.setState({ newPost : newPost })
        
    }
    
    buCreatePost = (event) => {
        event.preventDefault();
        const { posts, newPost } = this.state
        console.log(posts)
        posts.push(newPost)
        this.setState({ posts })
        console.log(newPost)
     }

    render() {
        let {editOne, posts, updatedPost} = this.state;
        console.log('uuuuuu',updatedPost)

        return (
            <Layout>
            <div style={  {position : "absolute", width: "300px",height: "120px", marginLeft: '50%'}  }>   
            <button > create new post </button>
            <form>
               <label>id</label><input  type="text" name="id" onChange={(e)=>{ this.creatPost(e) }}  />
                <label>title</label><input  type="text" name="title" onChange={(e)=>{ this.creatPost(e) }} />
                <textarea name="body" onChange={(e)=>{ this.creatPost(e) }} ></textarea>
                <input type="submit" value="Submit"  onClick={ this.buCreatePost }/>
            </form>
            </div>
                <div style={  {position : "absolute", width: "300px",height: "120px"}   }>
                   {
                        posts.map((post, i) => (
                            <div  key={i} >
                            <h3 >{post.title} </h3>
                            <p >{post.body}</p>
                        
                            
            <Popup trigger={<button onClick={() => this.updatePost(post)}>update</button>}
                        position="right center">
                        <div>
                            <textarea onChange={(e) => this.handleChange(e, post)}>{post.body}</textarea>
                        </div>
                         <button  onClick={this.submitPost }>save</button>
            </Popup>
            <button onClick={ (e) => this.deletePost(e, post, i) }> delete </button>
                         </div>
                        ))
                    }
                  </div>  
        </Layout>
        )
    }
}

export default Index