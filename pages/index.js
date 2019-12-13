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
            editOne: null,
            updatedPost : null
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

     deletePost = (e, post) => {
         console.log(post)
     } 

    render() {
        let {editOne, posts, updatedPost} = this.state;
        console.log('uuuuuu',updatedPost)

        return (
            <Layout>
                <div style={  {position : "absolute",
            left:  "150px",
            width: "300px",
            height: "120px"}   }>
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
            <button onClick={ (e, post) => this.deletePost(e, post) }> delete </button>    
                         </div>
                        ))
                    }
                  </div>  
        </Layout>
        )
    }
}

export default Index