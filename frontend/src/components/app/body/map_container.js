import { connect } from "react-redux"

import MapDiv from "./map" 

const mSTP = state => {
    let tripEntries = Object.values(state.entities.entries)
        .filter(entry => entry.trip === state.ui.selectedTrip)
    
    return ({
        tripEntries: tripEntries
    })
}

export default connect(mSTP)(MapDiv)
