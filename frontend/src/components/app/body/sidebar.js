import React, { Component } from 'react'
// import EntryFormContainer from './entry/entry_form_container'
import EntryIndexContainer from './entry/entry_index_container'
import ModalButton from '../../modal/modal_button_container'

export default class Sidebar extends Component {
    render() {
        return (
            <div>
                {/* <EntryFormContainer /> */}
                <ModalButton action={'createEntry'} buttonTitle={"Create Entry"}/>
                <EntryIndexContainer />
            </div>
        )
    }
}
