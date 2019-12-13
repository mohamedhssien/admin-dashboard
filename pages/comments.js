import React, { Component } from 'react'
import Layout from '../components/layout'
import Popup from "reactjs-popup"


class Commonts extends Component {
    constructor(props) {
        super(props)

        this.state = {
            comments: [],
            editOne: null,
            updatedComment: null
        }
    }

    
    componentDidMount() {
        let {comments} = this.props;
        this.setState({comments: comments});
        
    }  

    updateComment(comment) {
        this.setState({editOne : comment.id});
    }

    handleChange = (e, comment) => {
        comment.body = e.target.value;
        this.setState({updatedComment: comment});
    }

    submitComment = () => {  
        this.setState({  editOne: null })
     } 

    deleteComment = (e, comment, i) => {
        const { comments } = this.state
        console.log(comment.id)
        comments.splice(i, 1);
        this.setState({ comments })
    } 



    static async getInitialProps(){
        const res = await fetch('http://jsonplaceholder.typicode.com/comments');
        const data = await res.json();
        console.log(data)
        return { comments: data }
    
    }

    render() {
        console.log(this.state.comments)
        return (
            <Layout>
                
                <div style={  {position : "absolute", width: "300px",height: "120px"}   }>
                  { 
                    this.state.comments.length > 0 &&  this.state.comments.map((comment, i) => (
                        <div key={i}> { comment.body } <div/>
                    <Popup trigger={<button onClick={() => this.updateComment(comment)}>update</button>}
                        position="right center">
                        <div>
                            <textarea onChange={(e) => this.handleChange(e, comment)} style={  {padding: '40px'}  }>{comment.body}</textarea>
                        </div>
                        <button  onClick={this.submitComment }>save</button>
                   </Popup>
                     <button onClick={ (e) => this.deleteComment(e, comment, i) }> delete </button>
                     </div>
                     ))
                 }
                </div>
                
            </Layout>
        )
    }
}

export default Commonts