import { connect } from "react-redux"
import TripItem from "./trip_item"
import { deleteTrip } from '../../../../actions/trip_actions'
import { receiveTripId } from '../../../../actions/map_actions'

const mSTP = (state, ownProps) => {
    let tripEntries = Object.values(state.entities.entries)
        .filter(entry => entry.trip === ownProps.trip._id)
    return ({
        tripEntries: tripEntries,
        currentTrip: state.ui.selectedTrip
    })
}

const mDTP = dispatch => ({
    deleteTrip: tripId => dispatch(deleteTrip(tripId)),
    receiveTripId: tripId => dispatch(receiveTripId(tripId))
})

export default connect(mSTP, mDTP)(TripItem)