import { connect } from "react-redux"
import { updateTrip } from "../../../../actions/trip_actions"
import {closeModal} from "../../../../actions/modal_actions"
import TripEditForm from "./trip_edit_form.js"


const mSTP = (state, ownProps) => ({
    trip: state.entities.trips[state.ui.selectedTrip]
}) 

const mDTP = dispatch => ({
    updateTrip: trip => dispatch(updateTrip(trip)),
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(TripEditForm)