import { GoogleApiWrapper } from 'google-maps-react'
import React, { Component } from 'react'
// import keys from "../../../../../config/keys"
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import MapDiv from './map'
import Sidebar from './sidebar'

export default class Body extends Component {
    render() {
        return (
            <div id="body-container">
                <MapDiv />
                 {/* <Wrapper apiKey={keys.API_KEY} render={render}>
                      <MapDiv/>
                 </Wrapper>
                <Sidebar /> */}
            </div>
        )
    }
}
