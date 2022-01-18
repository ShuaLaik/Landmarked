import { connect } from "react-redux"
import Body from "./body"


const mSTP = state => ({
    user: state.session.user,
    entries: state.entities.entries
})
const mDTP = dispatch => ({

})

export default connect(mSTP,mDTP)(Body)