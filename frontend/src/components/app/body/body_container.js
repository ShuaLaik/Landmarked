import { connect } from "react-redux"
import Body from "./body"
import { fetchAllUserEntries } from "../../../actions/entry_actions"
import { fetchAllUserTrips } from "../../../actions/trip_actions"

const mSTP = state => ({
    user: state.session.user,
    entries: state.entities.entries
})
const mDTP = dispatch => ({
    fetchAllUserEntries: userId => dispatch(fetchAllUserEntries(userId)),
    fetchAllUserTrips: userId => dispatch(fetchAllUserTrips(userId))
})

export default connect(mSTP,mDTP)(Body)