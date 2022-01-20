import { connect } from "react-redux"
import TripItem from "./trip_item"
import { deleteTrip } from '../../../../actions/trip_actions'
import { receiveTripId } from '../../../../actions/map_actions';
import { fetchEntry, updateEntry } from '../../../../actions/entry_actions'


const mSTP = (state, ownProps) => {
    let tripEntries = Object.values(state.entities.entries)
        .filter(entry => entry.trip === ownProps.trip._id)
    return ({
        tripEntries: tripEntries
    })
}

const mDTP = dispatch => ({
    deleteTrip: tripId => dispatch(deleteTrip(tripId)),
    receiveTripId: tripId => dispatch(receiveTripId(tripId)),
    fetchEntry: entryId => dispatch(fetchEntry(entryId)),
    updateEntry: entry => dispatch(updateEntry(entry))
})

export default connect(mSTP, mDTP)(TripItem)