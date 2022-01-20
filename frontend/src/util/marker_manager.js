

export default class MarkerManager {
constructor(map){
      this.map = map;
      this.markers = {};
      // this.markers = [];
      this.coords = [];
    }
  
    updateMarkers(entrys, isTrip){

      // Object.keys(this.markers).forEach(marker => {
      //     this.removeMarker(marker)   
      // })
        // this.markers = {};
        Object.keys(this.markers).forEach(markerId => this.markers[markerId].setMap(null));
      

       
        
        // const entrysObj = {};
        
    
        // entrys.forEach(entry => entrysObj[entry.id] = entry)
        
        // let nonExistent = entrys.filter(entry => !this.markers[entry.id])
        
        // nonExistent.forEach(newEntry => this.createMarkerFromListing(newEntry))
        debugger
        // entrys.forEach(entry => {
        //   if (entrysObj[entry.id]) {
        //     debugger
        //     delete entrysObj[entry.id]
        //   } else {
        //     entrysObj[entry.id] = entry
        //   }
        // })

        // const createEntry = entrys.filter(entry => (
        //   !entrysObj[entry.id]
        // ))
       
        // createEntry = entrys.filter(entry => this.coords[0].lat)

        

        entrys.forEach(allowedEntry => this.createMarkerFromListing(allowedEntry))

        // let clearCurrent = Object.keys(this.markers).filter(entryId => entrysObj[entryId])
        // clearCurrent.forEach((currentId) => this.removeMarker(this.markers[currentId]))

        

        Object.values(entrys).forEach(entry => this.coords.push({
            lat: parseFloat(entry.location.latitude),
            lng: parseFloat(entry.location.longitude)
            })
        )
        
        // isTrip ? this.addPolyLine() : null;
        // this.addPolyLine();
        // if (isTrip) {
        //   this.addPolyLine(); 
        // }; 
    };

    createMarkerFromListing(entry) {
        const position = new window.google.maps.LatLng(parseFloat(entry.location.latitude), parseFloat(entry.location.longitude));
        // const position = ({lat: parseFloat(entry.location.latitude), lng: parseFloat(entry.location.longitude)});
        const marker = new window.google.maps.Marker({
            position,
            map: this.map,
            entryId: entry._id
            // tripId: entry.trip
        });
        debugger
        this.markers[marker.entryId] = marker;
        // this.markers.push[marker]
        debugger
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
        debugger
    }
}
  
