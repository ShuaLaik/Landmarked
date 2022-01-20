

export default class MarkerManager {
constructor(map){
      this.map = map;
      this.markers = {};
      this.coords = [];
      this.state = {};
      this.polylines = [];
      this.lineSymbol = {
        path: "M 0,-1 0,1",
        strokeOpacity: 1,
        scale: 4,
      };
    }
  
    updateMarkers(entrys, isTrip){
      this.coords = [];
      
      for (let i = 0; i < this.polylines.length; i++){                           
          this.polylines[i].setMap(null); //or line[i].setVisible(false);
      }

      Object.keys(this.markers).forEach(markerId => this.markers[markerId].setMap(null));

      entrys.forEach((allowedEntry, idx) => this.createMarkerFromListing(allowedEntry, idx))

     
        if (isTrip) {
          this.addPolyLine(entrys); // added argument here 
        }; 
    };

    createMarkerFromListing(entry, idx) {

        var mIcon = {
          // path: window.google.maps.SymbolPath.CIRCLE,
          fillOpacity: 0.1,
          fillColor: '#FF0000',
          strokeOpacity: 1,
          strokeWeight: 1,
          strokeColor: '#333',
          scale: 12
        };

        debugger
        const position = new window.google.maps.LatLng(parseFloat(entry.location.latitude), parseFloat(entry.location.longitude));
        // const position = ({lat: parseFloat(entry.location.latitude), lng: parseFloat(entry.location.longitude)});
        const marker = new window.google.maps.Marker({
            position,
            map: this.map,
            entryId: entry._id,
            title: (idx + 1).toString(),
            icon: mIcon,
            label: {color: '#FFFFFF', fontSize: '12px', fontWeight: '600', text: (idx + 1).toString()}
            // tripId: entry.trip
        });
        this.markers[marker.entryId] = marker;
        // this.markers.push[marker]
    }

    // removeMarker(marker) {
    //   this.markers[marker.entryId].setMap(null);
    //   delete this.markers[marker.entryId];
    // }

    addPolyLine(entrys) {
        Object.values(entrys).forEach(entry => this.coords.push({
            lat: parseFloat(entry.location.latitude),
            lng: parseFloat(entry.location.longitude)
            })
        )
        // const lineSymbol = {
        //     path: "M 0,-1 0,1",
        //     strokeOpacity: 1,
        //     scale: 4,
        // };

        var line = new window.google.maps.Polyline({
          path: this.coords,
          geodesic: true,
          strokeColor: '#FF0000',
        //   strokeOpacity: 1.0,
          strokeOpacity: 0,  
        //   strokeWeight: 2
          icons: [
            {
              icon: this.lineSymbol,
              offset: "0",
              repeat: "20px",
            },
          ],
        });

        line.setMap(this.map)

        this.polylines.push(line)
    }
}
  
