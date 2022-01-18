import { connect } from "react-redux"
import { fetchAllLocationEntries } from "../../../../actions/entry_actions"
import EntryIndex from "./entry_index"


const mSTP = state => {
    const locationId = ownProps.locationId;
    return {
        entries: Object.values(state.entities.entries).filter(entry => (
                entry.location === locationId 
            )  
        )
    }
}

const mDTP = dispatch => ({
    fetchEntries: userId => dispatch(fetchAllLocationEntries(userId))
})
export default connect(mSTP, mDTP)(EntryIndex)