import React, { Component } from 'react'

export default class EntryItem extends Component {
    componentDidMount() {

    }

    render() {
        const {entry_photo_url, message} = this.props.entry
        return (
            <div className='entry'>
                <img src={entry_photo_url} className="entry-image"></img>
                <p className='entry-message'>{message}</p>
            </div>
        )
    }
}
