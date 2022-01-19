import { connect } from "react-redux"
import TripItem from "./trip_item"
import { deleteTrip } from '../../../../actions/trip_actions'
import { receiveTripId } from '../../../../actions/map_actions'

const mDTP = dispatch => ({
    deleteTrip: tripId => dispatch(deleteTrip(tripId)),
    receiveTripId: tripId => dispatch(receiveTripId(tripId))
})

export default connect(null, mDTP)(TripItem)