import React, { Component } from 'react'
import ModalButtonContainer from '../../../modal/modal_button_container';
import EntryItemContainer from '../entry/entry_item_container'

export default class TripItem extends Component {
    constructor(props){
        super(props)
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

    render() {
        const {trip} = this.props
        return (
            <div onClick={this.handleClick} className='trip-container'>
                <h1 className='trip-title'>{trip.title}</h1>
                <div className='entities-container'>
                    {
                        this.props.tripEntries.map(tripEntry => {
                            return (<EntryItemContainer entry={tripEntry}/>)
                        }
                    )
                    }
                </div>
                    <ModalButtonContainer trip={trip} action={"editTrip"} buttonTitle={"Edit"}/>
                    <ModalButtonContainer trip={trip} action={"createEntry"} buttonTitle={"Create Trip Entry"}/>
                <button onClick={this.handleDelete}>Remove Trip</button>
            </div>
        )
    }
}
 