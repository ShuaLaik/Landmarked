import { connect } from "react-redux"
import EntryItem from "./entry_item"
import {deleteEntry} from '../../../../actions/entry_actions'

// const mSTP = state => {

// }

const mDTP = dispatch => ({
    deleteEntry: userId => dispatch(deleteEntry(userId))
})
export default connect(null, mDTP)(EntryItem)