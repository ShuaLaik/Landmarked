import React, { Component } from 'react'
import MapDiv from './map'
import Sidebar from './sidebar'

export default class Body extends Component {
    componentDidMount(){
        const {fetchAllUserEntries, user} = this.props;
        fetchAllUserEntries(user.id);
    }
    render() {
        if (Object.values(this.props.entries).length > 0){
            return (
                <div id="body-container">
                    <MapDiv entries={this.props.entries}/>
                    <Sidebar user={this.props.user}/>
                </div>
            )
        } else {
            return null;
        }
    }
}
