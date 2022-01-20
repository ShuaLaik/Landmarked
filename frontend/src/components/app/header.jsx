import React, { Component } from 'react'

export default class Header extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick () {
        this.props.resetTripId()
        this.props.resetEntryObject()
    }

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
                    <button onClick={this.handleClick}/>
                    <button onClick={() => this.props.logout()}>Logout</button>
                </div>
            </div>
        )
    }
}
