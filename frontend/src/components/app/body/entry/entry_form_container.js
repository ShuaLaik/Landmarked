import { connect } from "react-redux"
import { createEntry } from "../../../../actions/entry_actions"
import { closeModal } from "../../../../actions/modal_actions"
import EntryForm from "./entry_form"

const mSTP = (state, ownProps) => ({
     entry: {
        address: "",
        entry_photo_url: "https://i.guim.co.uk/img/media/44f2336229a374ad38a259a16cd73024af89fdc1/122_281_2255_1352/master/2255.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=c883fec9a9506a3f3e6bf9f5deeb8412",
        message: "",
        title: "",
        user: state.session.user.id,
        trip: state.ui.selectedTrip,
        location: {
            longitude: "",
            latitude: ""
        }
    }
}) 


const mDTP = dispatch => ({
    action: entry => dispatch(createEntry(entry)),
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(EntryForm)