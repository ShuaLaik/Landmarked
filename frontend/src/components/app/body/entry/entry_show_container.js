import { connect } from "react-redux"
import EntryShow from "./entry_show"

const mSTP = state => ({
    entry: state.ui.selectedEntry
})
const mDTP = dispatch => ({

})
export default connect(mSTP, mDTP)(EntryShow)