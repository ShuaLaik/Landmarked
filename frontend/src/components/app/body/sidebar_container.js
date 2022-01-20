import { connect } from "react-redux"
import Sidebar from "./sidebar"
import { updateEntry } from '../../../actions/entry_actions';


const mSTP = state => {
    let selectedEntries = Object.values(state.entities.entries).filter(entry => (!entry.trip))
    let combinedTripsEntries = Object.assign({}, selectedEntries, state.entities.trips);
    combinedTripsEntries = Object.values(combinedTripsEntries)
    let sortedEntities = combinedTripsEntries.sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt))
    return({
        combinedTripsEntries: sortedEntities,
        entries: state.entities.entries
    })
}

const mDTP = dispatch => ({
    updateEntry: entry => dispatch(updateEntry(entry))
})

export default connect(mSTP, mDTP)(Sidebar)