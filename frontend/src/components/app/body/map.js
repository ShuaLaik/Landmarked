import React, { Component } from 'react'
import MarkerManager from '../../../util/marker_manager';
import Style from "./styles"

export default class MapDiv extends Component {

    componentDidUpdate(prevProps){
        if (Object.values(this.props.tripEntries).length > 0){ //selected trips
            this.MarkerManager.updateMarkers(Object.values(this.props.tripEntries), true)
            this.changeZoom(Object.values(this.props.tripEntries))
        } else { 
            this.MarkerManager.updateMarkers(Object.values(this.props.entries), false)
            this.changeZoom(Object.values(this.props.entries))
        }
    }
      

    getCorners (entrys) {
        let coordinates = []; // smallest x smallest y 
        let latitudes = [];
        let longitudes = [];

        for (let i = 0; i < entrys.length; i++){
            latitudes.push(parseFloat(entrys[i].location.latitude))
            longitudes.push(parseFloat(entrys[i].location.longitude))
        }
        coordinates = [Math.min(...latitudes), Math.min(...longitudes), Math.max(...latitudes), Math.max(...longitudes)]        
        return coordinates;
    }   // 0 and 1 are lat and long respecitvely for southwest, 2 and 3 are lat and long for north east

    changeZoom(entrys) {
        let coordinates = this.getCorners(entrys)
        const bounds = new window.google.maps.LatLngBounds(
            new window.google.maps.LatLng(coordinates[0], coordinates[1]), //southwest
            new window.google.maps.LatLng(coordinates[2], coordinates[3]) //northeast
        ); 
        // google.maps.event.addListenerOnce(map, 'bounds_changed', () => {
        
        // let midpoint = {lat: (coordinates[0] + coordinates[2])/2, lng: (coordinates[0] + coordinates[2])/2}
        // this.map.panTo(midpoint)
        this.map.fitBounds(bounds)
        // this.map.panToBounds(bounds)
        
        if (this.map.getZoom() > 8 && entrys.length < 2) {this.map.setZoom(8)};
        // var listener = window.google.maps.event.addListener(this.map, "idle", function() { 
        //     if (this.map.getZoom() > 16) this.map.setZoom(16); 
        //     window.google.maps.event.removeListener(listener); 
        //   });
    }

    componentDidMount() {
        const mapOptions = {
            // center: { lat: 37.7758, lng: -122.435 }, // this is SF
            center: { lat: 0, lng: 0 }, // center of the map
            // zoom: 2,
            zoom: 3,
            streetViewControl: false,
            addressControl: false,
            panControl: false,
            fullscreenControl: false,
            zoomControl: false,
            mapTypeControl: false,
            clickableIcons: false,
            styles: Style //Style defaults are set in styles.js
        };
        // wrap this.mapNode in a Google Map
        this.map = new window.google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map);
        // this.registerListeners();
        if (Object.values(this.props.entries)){
            this.MarkerManager.updateMarkers(Object.values(this.props.entries))
        }
    }
    render() {
        return <div id="map-container" ref={ map => this.mapNode = map } >Map</div>
    }
}

