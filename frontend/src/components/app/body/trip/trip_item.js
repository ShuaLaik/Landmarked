import React, { Component } from 'react'
import ModalButtonContainer from '../../../modal/modal_button_container';
import EntryItemContainer from '../entry/entry_item_container'

export default class TripItem extends Component {
    constructor(props){
        super(props);
        this.state = {entry: null}
        this.handleClick = this.handleClick.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleClick () {
        const {receiveTripId, trip } = this.props;
        receiveTripId(trip._id)
    }

    handleDelete(e) {
        e.stopPropagation();
        const {deleteTrip, trip } = this.props;
        deleteTrip(trip._id)
    }

    allowDrop(e) {
        e.preventDefault();
    }

    drop(e) {
        const { updateEntry, fetchEntry } = this.props;
        e.preventDefault();
        const data = e.dataTransfer.getData("text");
        debugger
        fetchEntry(data)
            .then(entry => (
                updateEntry(
                    Object.assign(entry, { trip: data })
                )                
            ));
    }

    render() {
        const {trip} = this.props
        return (
            <div onClick={this.handleClick} 
            className='trip-container'
            onDrop={this.handleDrop} 
            onDragOver={this.allowDrop}>
                <h1 className='trip-title'>{trip.title}</h1>
                <div className='entities-container'>
                    {
                        this.props.tripEntries.map(tripEntry => {
                            return (
                            // <div className='trip-entry-item-container'>
                                <EntryItemContainer entry={tripEntry}/>
                            // </div>
                            )}
                    )
                    }
                </div>
                <div id="trip-buttons">
                    <ModalButtonContainer trip={trip} action={"editTrip"} buttonTitle={"Edit Trip"}/>
                    <ModalButtonContainer trip={trip} action={"createEntry"} buttonTitle={"Add Entry"}/>
                    <button onClick={this.handleDelete}>Remove Trip</button>
                </div>
            </div>
        )
    }
}
 