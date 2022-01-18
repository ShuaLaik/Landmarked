import React, { Component } from 'react'
import MarkerManager from '../../../util/marker_manager';

export default class MapDiv extends Component {
    constructor(props){
        super(props)
        this.state = {
            num: 1
        }
    }
    componentDidUpdate(prevProps){
        if (prevProps.entries !== this.props.entries) {
            this.setState({ num: this.state.num + 1})
        }
    }
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
        if (Object.values(this.props.entries) > 0){
            this.MarkerManager.updateMarkers(Object.values(this.props.entrys))
        }
    }
    render() {
        return <div id="map-container" ref={ map => this.mapNode = map } >Map</div>
    }
}

