import React, { Component } from 'react'
import ModalButtonContainer from '../../../modal/modal_button_container';

export default class EntryItem extends Component {
    componentDidMount() {
 
    }

    render() {
        const {entry_photo_url, message} = this.props.entry
        return (
            <div className='entry'>
                <img src={entry_photo_url} className="entry-image" alt="Entry"/>
                <h1 className='entry-message'>{message}</h1>
                <ModalButtonContainer entry={this.props.entry} action={"editEntry"} buttonTitle={"Edit"}/>
                <button onClick={() => this.props.deleteEntry(this.props.entry._id)}>Remove Entry</button>
            </div>
        )
    }
}
