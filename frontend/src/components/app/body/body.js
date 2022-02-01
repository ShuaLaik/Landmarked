import React, { Component } from 'react'
// import MapDiv from './map'
import MapContainer from './map_container';
import SidebarContainer from './sidebar_container'

export default class Body extends Component {
    componentDidMount(){
        const {fetchAllUserEntries, fetchAllUserTrips, user} = this.props;
        fetchAllUserEntries(user.id);
        fetchAllUserTrips(user.id);
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick () {
        this.props.resetTripId()
        this.props.resetEntryObject()
    }
    
    render() {
        if (Object.values(this.props.entries).length > 0){
            return (
                <div id="body-container">
                    {/* <MapDiv entries={this.props.entries}/> */}
                    {/* <MapContainer entries={this.props.entries}/> */}
                    <button onClick={this.handleClick} id='view-all-button'>View All</button>
                    <MapContainer />
                    <SidebarContainer user={this.props.user}/>
                </div>
            )
        } else {
            return (
                <div id="body-container">
                    {/* <MapDiv entries={this.props.entries}/> */}
                    {/* <MapContainer entries={this.props.entries}/> */}
                    <button onClick={this.handleClick} id='view-all-button'>View All</button>
                    <SidebarContainer user={this.props.user}/>
                </div>
            )
        }
    }
}
