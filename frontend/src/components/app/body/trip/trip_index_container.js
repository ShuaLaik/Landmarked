import { connect } from "react-redux"
import { fetchAllUserTrips } from "../../../../actions/trip_actions"
import EntityIndex from "../entry/entity_index"


const mSTP = state => {
    const userId = state.session.user.id
    return {
        entities: Object.values(state.entities.trips).filter(trip => (
                trip.user === userId
            ),  
        ),
        userId,
        type: 'trip',
        currentTrip: state.ui.selectedTrip
    }
}

const mDTP = dispatch => ({
    action: userId => dispatch(fetchAllUserTrips(userId))
})
export default connect(mSTP, mDTP)(EntityIndex)