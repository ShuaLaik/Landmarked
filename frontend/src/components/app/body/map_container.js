import { connect } from "react-redux"

import MapDiv from "./map" 

const mSTP = state => {
    let tripEntries = Object.values(state.entities.entries)
        .filter(entry => entry.trip === state.ui.selectedTrip)

    // conditional for what entries will be
    if(state.ui.selectedEntry){
        let entries = [state.ui.selectedEntry]
        return ({
            tripEntries: tripEntries,
            entries: entries
        })
} else {
        let entries = Object.values(state.entities.entries)
        return ({
            tripEntries: tripEntries,
            entries: entries
        })
    }
}

export default connect(mSTP)(MapDiv)
