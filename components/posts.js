import React, { Component } from 'react'
import { connect } from "react-redux";
import PropTypes from 'prop-types'; 
import Popup from "reactjs-popup"
import   { fetchPosts }  from "../redux/actions/postActions";

import Layout from '../components/layout'
import { Provider } from "react-redux";
import  store  from "../redux/store";

class Posts extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    componentDidMount() {
        // let {users} = this.props;
        // this.setState({users});
        this.props.fetchPosts();
        console.log(this.props)
        console.log(this.props.posts)
    } 

    render() {
        return (
            <Provider store={ store } >
            <Layout>
                
            
            <div> 
                    {
                        this.props.posts.map((post, i) => (
                            <div  key={i} >
                            <h3 >title : {post.title} </h3>
                            <p >{post.body}</p>
                           
                <Popup trigger={<button >update post</button>}
                    position="right center">
                    <div>
                     <textarea  value = { post.username}></textarea>
                    </div>
                        <button >save</button>
                </Popup>

                <button > delete user</button>
                </div>    
                ))
            }  
            </div>
            </Layout>
            </Provider>
        )
    }
}

Posts.PropTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    // newUser: PropTypes.object 
}

const mapStateToProps = (state) => ({
    posts: state.posts.posts,
    // newUser: state.users.user
})

export default connect(mapStateToProps, {fetchPosts})(Posts)
