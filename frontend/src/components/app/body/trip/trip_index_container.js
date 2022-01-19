import { connect } from "react-redux"
import { fetchAllUserTrips } from "../../../../actions/trip_actions"
import EntryIndex from "./entry_index"


const mSTP = state => {
    const userId = state.session.user.id
    return {
        trips: Object.values(state.entities.trips).filter(trip => (
                trip.user === userId
            ),  
        ),
        userId,
        type: 'trip'
    }
}

const mDTP = dispatch => ({
    action: userId => dispatch(fetchAllUserTrips(userId))
})
export default connect(mSTP, mDTP)(EntryIndex)