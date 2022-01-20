import { connect } from "react-redux"
import { openModal } from "../../actions/modal_actions"
import React from 'react'
import {receiveEditEntryObject} from '../../actions/entry_actions'

class ModalButton extends React.Component {
    constructor(props){
        super(props)

        this.handleClick = this.handleClick.bind(this)
    }
    handleClick () {
        // if (this.props.action === 'editEntry') {
        //     this.props.receiveEditEntryObject(this.props.entry)
        // } 
        this.props.openModal(this.props.action)
    }

    render () {
        return (
            <button onClick={this.handleClick}>
                {this.props.buttonTitle}
            </button>
        )
    }
}

const mSTP = (state, ownProps) => {
    return({
        action: ownProps.action,
        buttonTitle: ownProps.buttonTitle
    })
}

const mDTP = dispatch => ({
    openModal: (modalName) => dispatch(openModal(modalName)),
    receiveEditEntryObject: (entry) => dispatch(receiveEditEntryObject(entry))
})

export default connect(mSTP,mDTP)(ModalButton)