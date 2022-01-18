import React, { Component } from 'react';

import Location from './location';
import LocationEntriesContainer from '../entry/location_entries_container';

export default class LocationShow extends Component {
    
    constructor(props) {
        super(props);
    }
    
    render() {

        return (
            <div className='location-items'>
                <Location/>
                <LocationEntriesContainer 
                locationId={this.props.locationId}/>
            </div>
        )
    }
}