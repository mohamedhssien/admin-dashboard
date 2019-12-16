import { FETCH_POSTS, NEW_POST } from "../types";

export function fetchPosts() {
    console.log('fetch')
    return function(dispatch){
        fetch('http://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts  => dispatch({
            type: FETCH_POSTS,
            payload: posts
        }))
    }
}

export function CreatePost(posts) {
    return function(dispatch){
        console.log('action called')
        fetch('http://jsonplaceholder.typicode.com/posts', {
            method: 'POST', 
            headers: {
            'content-type': 'application/json'
            },
            body: JSON.stringify(posts)
        })
        .then(res  => res.json())
        .then(post  => dispatch({
            type: NEW_POST,
            payload: post
        }))
        
    }
}