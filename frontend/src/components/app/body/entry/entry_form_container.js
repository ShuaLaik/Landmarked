import { connect } from "react-redux"
import { createEntry } from "../../../../actions/entry_actions"
import { closeModal } from "../../../../actions/modal_actions"
import EntryForm from "./entry_form"

const mSTP = (state, ownProps) => ({
     entry: {
        address: "",
        entry_photo_url: "https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg",
        message: "",
        title: "",
        user: state.session.user.id,
        trip: state.ui.selectedTrip,
        location: {
            longitude: "",
            latitude: ""
        }
    },
    errors: Object.values(state.errors.entryErrors)
}) 


const mDTP = dispatch => ({
    action: entry => dispatch(createEntry(entry)),
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(EntryForm)