import Fetch from 'isomorphic-unfetch';
import React, { Component } from 'react'
import Layout from '../components/layout'
import Comments from './comments'
import Link from 'next/link';
import Popup from "reactjs-popup"
import Posts from "../components/posts";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


class Index extends Component {
    constructor(props) {
        super(props)

        
    }

    render() {
        
        

        return (
            <Layout>
                 <CssBaseline />
                <Container fixed>
                <Typography variant="h1" component="h4" style={{ backgroundColor: '#9e9e9e', height: '100vh' }} >
                  manage through links above
                </Typography>
                </Container>

            
            </Layout>
        )
    }
}

export default Index