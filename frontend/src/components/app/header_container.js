import { connect } from "react-redux"
import { logout } from "../../actions/session_actions"
import { resetTripId } from "../../actions/map_actions"
import { resetEntryObject } from "../../actions/entry_actions"
import Header from "./header"

const mSTP = state => ({
    user: state.session.user
})
const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    resetTripId: () => dispatch(resetTripId()),
    resetEntryObject: () => dispatch(resetEntryObject())
})

export default connect(mSTP,mDTP)(Header)