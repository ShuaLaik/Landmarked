import React, { Component } from 'react'
import ModalButtonContainer from '../../../modal/modal_button_container';

export default class EntryItem extends Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this);
        this.dragStartHandler = this.dragStartHandler.bind(this);
    } 

    componentDidMount() {
 
    }

    handleClick(){
        if(!this.props.entry.trip) {
            this.props.resetTripId()
        }
        this.props.receiveEditEntryObject(this.props.entry)
    }

    dragStartHandler(e) {
        const { entry } = this.props;
        e.dataTransfer.setData("text", entry._id);
    }


    render() {
        const {entry_photo_url, message} = this.props.entry
        return (
            <div 
            className='trip-entry-item-container' 
            onClick={this.handleClick}
            draggable='true'
            onDragStart={this.dragStartHandler}>
                <img src={entry_photo_url} className="entry-image" alt="Entry"/>
                <h1 className='entry-message'>{message}</h1>
                <div>
                    <ModalButtonContainer entry={this.props.entry} action={"editEntry"} buttonTitle={"Edit"}/>
                    <button onClick={() => this.props.deleteEntry(this.props.entry._id)}>Remove Entry</button>
                </div>
            </div>
        )
    }
}
