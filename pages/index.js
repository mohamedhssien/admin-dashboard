import Fetch from 'isomorphic-unfetch';
import React, { Component } from 'react'
import Layout from '../components/layout'
import Comments from '../components/commonts'

class Index extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts : this.props.posts
            
        }
    }
    
    static async getInitialProps(){
        const res = await fetch('http://jsonplaceholder.typicode.com/posts');
        const data = await res.json();
        
        return { posts: data }
    
    
    }


    
    render() {
        //console.log(this.props.posts)
        return (
            <Layout>
                <div style={  {position : "absolute",
            left:  "150px",
            width: "300px",
            height: "120px"}   }>
                   {
                        this.props.posts.map((post, i) => (
                            <div  key={i} >
                            <h3 >{post.title} </h3>
                            <p >{post.body} </p>
                            </div>
                        ))
                    }
                  </div>  
        </Layout>
        )
    }
}

export default Index