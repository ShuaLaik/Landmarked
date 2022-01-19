import { connect } from "react-redux"
import Sidebar from "./sidebar"

const mSTP = state => {
    let selectedEntries = Object.values(state.entities.entries).filter(entry => (!entry.trip))
    let combinedTripsEntries = Object.assign({}, selectedEntries, state.entities.trips);
    combinedTripsEntries = Object.values(combinedTripsEntries)
    let sortedEntities = combinedTripsEntries.sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt))
    return({
        combinedTripsEntries: sortedEntities
    })
}

// const mDTP = dispatch => ({
//     fetchAllUserEntries: userId => dispatch(fetchAllUserEntries(userId))
// })

export default connect(mSTP, null)(Sidebar)