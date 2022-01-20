import React, { Component } from 'react'

export default class EntryShow extends Component {
    constructor(props){
        super(props)
        this.state = this.props.entry
    }
    render() {
        debugger
        return (
            <form className="show-container">
                <ul>
                    <input
                    className="h1"
                    value={this.state.title}/>
                    <h2>{this.state.createdAt}</h2>
                    <textarea
                    value={this.state.message}/>
                </ul>
                <div> 
                    <img src={this.state.entry_photo_url}/>
                </div>
            </form>
        )
    }
}
