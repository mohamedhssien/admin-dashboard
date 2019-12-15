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

        
    }

    render() {
        
        

        return (
            <Layout>
        

               <h1> please click the links above </h1>
            
            </Layout>
        )
    }
}

export default Index