import React, { Component } from 'react'
import Layout from './layout'

class Commonts extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts : Object.values(this.props) 
        }
    }


    static async getInitialProps(){
        const res = await fetch('http://jsonplaceholder.typicode.com/posts');
        const data = await res.json();
        
        return { posts: data }
    
    
    }

    render() {
        console.log(this.state.posts)
        return (
            <Layout>
                
                    {/* {
                        this.state.posts.map((post, i) => (
                            <li key={i}>{ post.title }</li>
                        ))
                    } */}
                   
                
            </Layout>
        )
    }
}

export default Commonts