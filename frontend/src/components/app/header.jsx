import React, { Component } from 'react'

export default class Header extends Component {
    constructor(props) {
        super(props)
    }



    render() {
        return (
            <div className="Header">
                <h1><span>L</span>and<span>M</span>arked</h1>
                <h1>{this.props.user.username}</h1>
                <div className="group">
                    <form>
                        <input 
                        type="text"
                        placeholder="Search - broken :("
                        />
                    </form>
                    <h2>⚙️</h2>
                    <button onClick={() => this.props.logout()}>Logout</button>
                </div>
            </div>
        )
    }
}
