import React, { Component } from 'react'
import MarkerManager from '../../../util/marker_manager';

export default class MapDiv extends Component {
    componentDidMount() {

        this.entrys = {
            1:{
                id: 1,
                location: {
                    latitude: 37.785840, 
                    longitude: -122.445803,
                }
            }
        }
        const mapOptions = {
        center: { lat: 37.7758, lng: -122.435 }, // this is SF
        zoom: 13
        };

        // wrap this.mapNode in a Google Map
        this.map = new window.google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map);
        // this.registerListeners();
        this.MarkerManager.updateMarkers(Object.values(this.entrys))
    }
    render() {
        return <div id="map-container" ref={ map => this.mapNode = map } >Map</div>
    }
}

