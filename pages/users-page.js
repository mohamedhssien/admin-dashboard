import {createStore } from 'redux'
import Layout from '../components/layout'
import { Provider } from "react-redux";
import  Users  from "../components/users";
import  store  from "../redux/store";
import { allReducer } from "../redux/reducers";



import React, { Component } from 'react'

class Userstst extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <Provider store={ store } >
            <Layout>
                <Users />
            </Layout>
            </Provider>
        )
    }
}

export default Userstst

