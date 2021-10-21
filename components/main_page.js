import React from 'react'
import Router from 'next/router'
import cookie from 'js-cookie'
import link from 'next/link'


const { render } = require("react-dom");


class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            gitRepo: ''
        }
        this.get
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
        console.log(this.state)
    }

    handleSubmit = e => {
        const gitRepo = this.state.gitRepo
        console.log('this is the repo name', gitRepo)
        e.preventDefault()

        fetch('/api/getRepo', {
            method: 'POST',
            headers: {
                'Content-type': "application/json"
            },
            body: JSON.stringify({
                gitRepo
            })
        }).then((r) => {
            //console.log(r)
        })
    }

    handleLogout = () => {
        cookie.remove('token')
        Router.push('/login')
    }


    render() {
        return (
            <>
                <div className='logout'>
                    <button onClick={this.handleLogout}>Logout</button>
                </div>
            </>
        )
    }
}


export default Main;

