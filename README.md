# Landmarked

An online travel journal to track all the great places you visit and all the trips you go on. 

## Background

Completed with a group of 4 members having just been exposed to MongoDB, Landmarked was built using a MERN stack in just under 5 days. 

## Photos 

## Functionality 
 
- Entries - When a user visits a location they are able to create an entry with a message and photo 
showing off their experience at the location.
- Trips - Users can save multiple entries under a trip. 
- Dynamic map 
  - Entries are saved to a location on the map when they are created. By default the user profile page displays a merker for each entry on the map.
  - When a trip is selected the travel path is plotted on the map

## Code Snippets 

```
componentDidUpdate(prevProps){
    if (Object.values(this.props.tripEntries).length > 0){ 
        this.MarkerManager.updateMarkers(Object.values(this.props.tripEntries), true)
        this.changeZoom(Object.values(this.props.tripEntries))
    } else { 
        this.MarkerManager.updateMarkers(Object.values(this.props.entries), false)
        this.changeZoom(Object.values(this.props.entries))
    }
}
 ```
Taking advantage of the Redux state, we were able to conditionally render map markers and alter map zoom based on the user's current selection. When a 'trip' or 'entry' is selected, the Redux state is updated and the map dynamically changes. Updating the zoom and visible markes appropriately, the map is responsive to user input. 

``` 
getCorners (entrys) {
    let coordinates = [];
    let latitudes = [];
    let longitudes = [];

    for (let i = 0; i < entrys.length; i++){
        latitudes.push(parseFloat(entrys[i].location.latitude))
        longitudes.push(parseFloat(entrys[i].location.longitude))
    }
    coordinates = [Math.min(...latitudes), Math.min(...longitudes), Math.max(...latitudes), Math.max(...longitudes)]        
    return coordinates;
}  
```
getCorners is a function handling the minimum and maximum latitude/longitude values of each collection of entry to allow the Google Maps API to re-zoom the map view dynamically.
## Technologies, Libraries, and APIs
- MERN stack for creating the app
- Google maps API - Location based functionality, and dynamic map
- AWS - Users can upload photos for their entries which are stored using AWS

## The Team
- Joe Manso - Backend, state setup, the *Brutal Bug Basher*
- Yisrael (Izzy) Peikes - Backend and state setup, officially dubbed *State and Schema Sensai*
- Josh Laikowski - Frontend and styling, known as the *Heroku Whisperer* and *Betty*
- Mack Zumarraga - Frontend and Google Map API, goes by *Map Magician*

## Features to come
- Follows - Add the ability to search for and follow friends
