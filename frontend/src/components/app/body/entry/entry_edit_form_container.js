import { connect } from "react-redux"
import { updateEntry } from "../../../../actions/entry_actions"
import { closeModal } from "../../../../actions/modal_actions"
import EntryEditForm from "./entry_edit_form"


const mSTP = (state, ownProps) => {
    debugger
    return ({
        entry: state.ui.selectedEntry  
    })
}
const mDTP = dispatch => ({
    updateEntry: entry => dispatch(updateEntry(entry)),
    closeModal: entry => dispatch(closeModal(entry)),
})

export default connect(mSTP, mDTP)(EntryEditForm)