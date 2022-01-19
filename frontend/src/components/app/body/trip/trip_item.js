import React, { Component } from 'react'
import ModalButtonContainer from '../../../modal/modal_button_container';

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
        debugger
        const {trip} = this.props
        return (
            <div onClick={this.handleClick} className='trip-container'>
                <h1 className='trip-title'>{trip.title}</h1>
                    <ModalButtonContainer trip={trip} action={"editTrip"} buttonTitle={"Edit"}/>
                <button onClick={this.handleDelete}>Remove Trip</button>
            </div>
        )
    }
}
 