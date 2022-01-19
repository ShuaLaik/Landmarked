import React, { Component } from 'react'
// import EntryFormContainer from './entry/entry_form_container'
import EntryIndexContainer from './entry/entry_index_container'
import TripIndexContainer from './trip/trip_index_container'

import ModalButton from '../../modal/modal_button_container'

export default class Sidebar extends Component {
    
    constructor(props) {
        super(props);
        this.state = { display: 'entries'};
    }

    determineComponent() {
        switch(this.state.display){
            case 'entries':
                return <EntryIndexContainer />;
            case 'trips':
                return <TripIndexContainer />;
        }       
    }


    render() {
        return (
            <div>
                <ModalButton 
                action={'createEntry'} 
                buttonTitle={"Create Entry"}/>
                <button onClick={() => this.setState({display: 'entries'})}>
                    entries
                </button>
                <button onClick={() => this.setState({display: 'trips'})}>
                    trips
                </button>
                { this.determineComponent() }
            </div>
        )
    }
}
