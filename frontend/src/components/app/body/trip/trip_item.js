import React, { Component } from 'react'
import ModalButtonContainer from '../../../modal/modal_button_container';
import EntryItemContainer from '../entry/entry_item_container'

export default class TripItem extends Component {
    constructor(props){
        super(props)
        this.state = {
            trip: this.props.trip,
            disabled: true
        }
        debugger
        this.handleClick = this.handleClick.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.submitNewTripTitle = this.submitNewTripTitle.bind(this);
        this.handleTitleClick = this.handleTitleClick.bind(this);
        this.drop = this.drop.bind(this);
        this.allowDrop = this.allowDrop.bind(this);
    }

    allowDrop(e) {
        e.preventDefault();
    }

    drop(e) {
        const { updateEntry, fetchEntry } = this.props;
        e.preventDefault();
        e.stopPropagation();
        const data = e.dataTransfer.getData("text");
        const entry = this.props.entries[data]
        updateEntry(
            Object.assign(entry, { trip: this.props.trip._id})
        )
    }
    // ------------------------------------------------------------------------------
    handleClick () {
        const {receiveTripId, trip } = this.props;
        receiveTripId(trip._id)
    }

    handleTitleClick (e) {
        this.switchTitleToForm();
        e.target.select();
    }
    
    handleDelete(e) {
        e.stopPropagation();
        const {deleteTrip, resetTripId, trip } = this.props;
        deleteTrip(trip._id) // deletes trip from DB and state, converts all trip entries (if any) to regular entries
        resetTripId(); // updates UI slice of state so no current trip is selected
    }
    // ------------------------------------------------------------------------------

    update(field){
        return e => {
            this.setState({trip: Object.assign({}, this.state.trip, {[field]: e.target.value})})
        }
    }
    
    submitNewTripTitle(e) {
        e.preventDefault();
        this.props.updateTrip(this.state.trip)
    }

    switchTitleToForm () {
        this.setState({ disabled: !this.state.disabled})
    }

    render() {
        const {trip} = this.props;
        let active = "hidden";
        this.props.currentTrip === this.props.trip._id ? active = "entities-container" : active = "hidden"
        return (
            <div 
            onClick={this.handleClick} 
            className='trip-container'
            onDrop={this.drop} 
            onDragOver={this.allowDrop}>
                <form onClick={this.handleTitleClick} onSubmit={this.submitNewTripTitle}>
                    <input  type="text" 
                            value={this.state.trip.title}
                            disabled={this.state.disabled}
                            onChange={this.update('title')}  
                    /> 
                </form>
                <div className={active}>
                    {
                        this.props.tripEntries.map(tripEntry => {
                            return (
                                <EntryItemContainer entry={tripEntry}/>
                            )})
                    }
                </div>
                <div id="trip-buttons">
                    <ModalButtonContainer trip={trip} action={"createEntry"} buttonTitle={"Add Entry"}/>
                    <button onClick={this.handleDelete}>Remove Trip</button>
                </div>
            </div>
        )
    }
}
 