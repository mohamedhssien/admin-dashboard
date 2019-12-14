import { FETCH_POSTS } from "../types";

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