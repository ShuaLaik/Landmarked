import React, { Component } from 'react'
// import keys from "../../../../../config/keys"
import MapDiv from './map'
import Sidebar from './sidebar'

export default class Body extends Component {
    render() {
        return (
            <div id="body-container">
                <MapDiv />
                <Sidebar user={this.props.user}/>
            </div>
        )
    }
}
