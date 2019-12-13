import React, { Component } from 'react'
import Layout from '../components/layout'

class Commonts extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }


    // static async getInitialProps(){
    //     const res = await fetch('http://jsonplaceholder.typicode.com/posts');
    //     const data = await res.json();
        
    //     return { posts: data }
    
    
    // }

    render() {
        console.log(this.state.posts)
        return (
            <Layout>
                
                  <h1> comments page </h1>
                
            </Layout>
        )
    }
}

export default Commonts