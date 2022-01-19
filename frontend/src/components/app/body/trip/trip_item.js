import React, { Component } from 'react'
import ModalButtonContainer from '../../../modal/modal_button_container';

export default class TripItem extends Component {
    componentDidMount() {
 
    }

    render() {
        const { name, trip, deleteTrip } = this.props.
        return (
            <div className='trip'>
                <h1 className='trip-name'>{name}</h1>
                <ModalButtonContainer trip={trip} action={"editTrip"} buttonTitle={"Edit"}/>
                <button onClick={() => deleteTrip(trip._id)}>Remove Trip</button>
            </div>
        )
    }
}
