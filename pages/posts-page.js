import React, { Component } from 'react'
import Layout from '../components/layout'
import { Provider } from "react-redux";
import  Posts  from "../components/posts";
import  store  from "../redux/store";


class PostsPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <Provider store={ store } >
            <Layout>
                <Posts />
            </Layout>
            </Provider>
        )
    }
}

export default PostsPage