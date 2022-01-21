import React, { Component } from 'react';
import parseDate from '../../../../util/parse_date';

export default class EntryShow extends Component {
    constructor(props){
        super(props)
        this.state = this.props.entry
    }
    render() {
        const { title, 
            createdAt, 
            message, 
            entry_photo_url } = this.state;

        return (
            <form className="show-container">
                <ul>
                    <input
                    className="h1"
                    value={title}/>
                    <h2>{parseDate(createdAt)}</h2>
                    <textarea
                    value={message}/>
                </ul>
                <div> 
                    <img src={entry_photo_url}/>
                </div>
            </form>
        )
    }
}
