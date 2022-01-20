import { connect } from "react-redux"
import { createTrip } from "../../../../actions/trip_actions"
import {closeModal} from "../../../../actions/modal_actions"
import TripForm from "./trip_form"


const mSTP = (state, ownProps) => ({
    trip: {
        title: '',
        user: state.session.user.id
    }
}) 

const mDTP = dispatch => ({
    action: trip => dispatch(createTrip(trip)),
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(TripForm)