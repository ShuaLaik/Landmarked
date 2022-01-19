import { connect } from "react-redux"
import { fetchAllUserEntries } from "../../../../actions/entry_actions"
import EntityIndex from "./entity_index"


const mSTP = state => {
    const userId = state.session.user.id
    return {
        entities: Object.values(state.entities.entries).filter(entry => (
                entry.user === userId
            ),  
        ),
        userId,
        type: 'entry'
    }
}

const mDTP = dispatch => ({
    action: userId => dispatch(fetchAllUserEntries(userId))
})
export default connect(mSTP, mDTP)(EntityIndex)