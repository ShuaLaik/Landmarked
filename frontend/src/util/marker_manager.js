

export default class MarkerManager {
constructor(map){
      this.map = map;
      this.markers = {};
    }
  
    updateMarkers(entrys){
        const entrysObj = {};
        entrys.forEach(entry => entrysObj[entry.id] = entry)
    debugger
        let nonExistent = entrys.filter(entry => !this.markers[entry.id])
        nonExistent.forEach(newEntry => this.createMarkerFromListing(newEntry))

        let clearCurrent = Object.keys(this.markers).filter(entryId => !entrysObj[entryId])
        clearCurrent.forEach((currentId) => this.removeMarker(this.markers[currentId]))
    };

    createMarkerFromListing(entry) {
        debugger;
        const position = new window.google.maps.LatLng(parseFloat(entry.location.latitude), parseFloat(entry.location.longitude));
        const marker = new window.google.maps.Marker({
            position,
            map: this.map,
            entryId: entry.id
        });
        this.markers[marker.entryId] = marker;
    }
    removeMarker(marker) {
      this.markers[marker.entryId].setMap(null);
      delete this.markers[marker.entryId];
    }
}
  
