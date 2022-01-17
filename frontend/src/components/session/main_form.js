import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import LoginFormContainer from './login_form_container'
import SignupFormContainer from './signup_form_container'

export default class MainForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            formType: "signup"
        }
    }

    handleClick(field){
        return (e) => {
            this.setState({ formType: field})
        }
    }
    render() {
        return (
            <div className="splash-logged-out">
                <div>
                    <ul>
                        <button onClick={this.handleClick("signup")}>Sign up</button>
                        <button onClick={this.handleClick("login")}>Login</button>
                    </ul>
                </div>
                {this.state.formType === "signup" ? <SignupFormContainer /> : <LoginFormContainer />}
                <img src="https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
            </div>
        )
    }
}
