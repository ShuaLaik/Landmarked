import React, { Component } from 'react'

export default class MapDiv extends Component {
    componentDidMount() {
        const mapOptions = {
        center: { lat: 37.7758, lng: -122.435 }, // this is SF
        zoom: 13
        };

        // wrap this.mapNode in a Google Map
        this.map = new google.maps.Map(this.mapNode, mapOptions);
    }
    render() {
        return <div id="map-container" ref={ map => this.mapNode = map } >Map</div>
    }
}

