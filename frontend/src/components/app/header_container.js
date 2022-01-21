import { connect } from "react-redux"
import { logout } from "../../actions/session_actions"
import { resetTripId } from "../../actions/map_actions"
import { resetEntryObject } from "../../actions/entry_actions"
import Header from "./header"
import { openModal } from "../../actions/modal_actions"

const mSTP = state => ({
    user: state.session.user
})
const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    resetTripId: () => dispatch(resetTripId()),
    resetEntryObject: () => dispatch(resetEntryObject()),
    openModal: type => dispatch(openModal(type))
})

export default connect(mSTP,mDTP)(Header)