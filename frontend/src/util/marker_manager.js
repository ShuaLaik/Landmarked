

export default class MarkerManager {
constructor(map){
      this.map = map;
      this.markers = {};
      this.coords = [];
    }
  
    updateMarkers(entrys){
        const entrysObj = {};
        entrys.forEach(entry => entrysObj[entry.id] = entry)
        let nonExistent = entrys.filter(entry => !this.markers[entry.id])
        nonExistent.forEach(newEntry => this.createMarkerFromListing(newEntry))

        let clearCurrent = Object.keys(this.markers).filter(entryId => !entrysObj[entryId])
        clearCurrent.forEach((currentId) => this.removeMarker(this.markers[currentId]))

        Object.values(entrys).forEach(entry => this.coords.push({
            lat: parseFloat(entry.location.latitude),
            lng: parseFloat(entry.location.longitude)
            })
        )

        this.addPolyLine();
    };

    createMarkerFromListing(entry) {
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

    addPolyLine() {

        const lineSymbol = {
            path: "M 0,-1 0,1",
            strokeOpacity: 1,
            scale: 4,
        };

        var line = new window.google.maps.Polyline({
          path: this.coords,
          geodesic: true,
          strokeColor: '#FF0000',
        //   strokeOpacity: 1.0,
          strokeOpacity: 0,  
        //   strokeWeight: 2
          icons: [
            {
              icon: lineSymbol,
              offset: "0",
              repeat: "20px",
            },
          ],
        });
  
        line.setMap(this.map)
    }
}
  
