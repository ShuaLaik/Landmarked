import { connect } from "react-redux"
import EntryItem from "./entry_item"
import {deleteEntry, receiveEditEntryObject} from '../../../../actions/entry_actions'
import {resetTripId} from '../../../../actions/map_actions'
import { openModal } from "../../../../actions/modal_actions"

// const mSTP = state => {

// }

const mDTP = dispatch => ({
    deleteEntry: userId => dispatch(deleteEntry(userId)),
    receiveEditEntryObject: entry => dispatch(receiveEditEntryObject(entry)),
    resetTripId: () => dispatch(resetTripId()),
    openModal: type => dispatch(openModal(type))
})
export default connect(null, mDTP)(EntryItem)