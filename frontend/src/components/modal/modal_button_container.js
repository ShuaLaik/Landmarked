import { connect } from "react-redux"
import { openModal } from "../../actions/modal_actions"
import React from 'react'

class ModalButton extends React.Component {
    constructor(props){
        super(props)
    }

    render () {
        debugger
        return (
            <button onClick={() => this.props.openModal(this.props.action)}>
                {this.props.buttonTitle}
            </button>
        )
    }
}

const mSTP = (state, ownProps) => {
    debugger
    return({
        action: ownProps.action,
        buttonTitle: ownProps.buttonTitle
    })
}

const mDTP = dispatch => ({
    openModal: (modalName) => dispatch(openModal(modalName))
})

export default connect(mSTP,mDTP)(ModalButton)