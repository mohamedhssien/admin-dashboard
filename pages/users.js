import Layout from '../components/layout'
import React, { Component } from 'react'
import Popup from "reactjs-popup"

class Users extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: [],
            last_edited_user: null
        }
    }

    componentDidMount() {
        let {users} = this.props;
        this.setState({users});
    }    

    static async getInitialProps(){
        const res = await fetch('http://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        return { users: data }
    }

    handleChange = (e, user) => {
        user.username = e.target.value
       // console.log( e.target.value )
       this.setState({ last_edited_user: user })

    }
    deleteUser = (e, user, i) => {
        const { users } = this.state
        console.log(user.id)
        users.splice(i, 1);
        this.setState({ users: users })
    } 

    render() {
        let { users } = this.state
        console.log(users)
        return (
            <Layout>
                {
                        users.map((user, i) => (
                            <div  key={i} >
                            <h3 >Name : {user.name} </h3>
                            <p >User Name : {user.username}</p>
                        
                            
            <Popup trigger={<button >update user name</button>}
                        position="right center">
                        <div>
                            <textarea onChange={(e) =>  this.handleChange(e, user) }>{user.username}</textarea>
                        </div>
                         <button >save</button>
            </Popup>

            <button onClick={ (e) => this.deleteUser(e, user, i) }> delete user</button>    

                         </div>
                        ))
                    }
            </Layout>
        )
    }
}

export default Users