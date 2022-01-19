import React, { Component } from 'react'
// import EntryFormContainer from './entry/entry_form_container'
import EntryItemContainer from './entry/entry_item_container'
import TripItemContainer from './trip/trip_item_container'

import ModalButton from '../../modal/modal_button_container'

export default class Sidebar extends Component {
    
    constructor(props) {
        super(props);
        this.state = { display: 'entries'};
    }

    render() {
        // debugger
        // if(!this.props.combinedTripsEntries) {
        //     return (null)
        // }
        debugger
        return (
            <div>
                <div className='entity-index-container'>
                    {this.props.combinedTripsEntries.map(entity => {
                        if (entity.type === 'trip'){
                            return <TripItemContainer trip={entity}/>
                        } else if (entity.type === 'entry'){
                            return <EntryItemContainer entry={entity}/>
                        }
                    })
                    }
                </div>
                <div>
                    <ModalButton 
                        action={'createEntry'} 
                        buttonTitle={"New Entry"}
                    />
                    <ModalButton 
                        action={'createTrip'} 
                        buttonTitle={"New Trip"}
                    />
                </div>
            </div>
        )
    }
}
