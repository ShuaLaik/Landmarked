import { connect } from "react-redux"
import { fetchAllUserEntries } from "../../../../actions/entry_actions"
import EntryIndex from "./entry_index"


const mSTP = state => {
    const userId = state.session.user.id
    debugger
    return {
        entries: Object.values(state.entities.entries).filter(entry => (
                entry.user === userId
            ),  
        ),
        userId
    }
}

const mDTP = dispatch => ({
    fetchAllUserEntries: userId => dispatch(fetchAllUserEntries(userId))
})
export default connect(mSTP, mDTP)(EntryIndex)