import { connect } from "react-redux"
import EntryForm from "./entry_form"


const mSTP = state => ({
    user: state.session.user
})
const mDTP = dispatch => ({

})
export default connect(mSTP, mDTP)(EntryForm)