import { connect } from "react-redux"
import Header from "./header"

const mSTP = state => ({
    user: state.session.user
})
const mDTP = dispatch => ({

})

export default connect(mSTP,mDTP)(Header)