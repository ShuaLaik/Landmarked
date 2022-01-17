import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div>
                <h1>Landmarked</h1>
                <h1>{this.props.user.username}</h1>
                <form>
                    <input 
                    type="text"
                    placeholder="Search - broken :("
                    />
                </form>
                <h2>⚙️</h2>
            </div>
        )
    }
}
