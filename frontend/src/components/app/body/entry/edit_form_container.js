import { connect } from "react-redux"
import { updateEntry } from "../../../../actions/entry_actions"
import EntryForm from "./entry_form"


const mSTP = (state, ownProps) => {
    return ({
        entry: state.ui.edit   
    })
}
const mDTP = dispatch => ({
    action: entry => dispatch(updateEntry(entry))
})

export default connect(mSTP, mDTP)(EntryForm)