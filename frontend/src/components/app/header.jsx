import React, { Component } from 'react'

export default class Header extends Component {

    render() {
        return (
            <div className="Header">
                <h1>Landmarked</h1>
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
