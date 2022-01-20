import React, { Component } from 'react'
import EntryItemContainer from './entry/entry_item_container'
import TripItemContainer from './trip/trip_item_container'
import ModalButton from '../../modal/modal_button_container'

export default class Sidebar extends Component {
    
    constructor(props) {
        super(props);
        this.state = { display: 'entries'};
    }

    render() {
        return (
            <div className='sidebar-container'>
                <div className='main-index-container'>
                    {this.props.combinedTripsEntries.map(entity => {
                        if (entity.type === 'trip'){
                            return <TripItemContainer key={entity._id} trip={entity}/>
                        } else if (entity.type === 'entry'){
                            return <div key={entity._id} className='single-entry-item-container'>
                                <EntryItemContainer entry={entity}/>
                            </div>
                        }
                    })
                    }
                </div>
                <div className='sidebar-button-container'>
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
