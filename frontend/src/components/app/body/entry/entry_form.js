import React, { Component } from 'react'
import axios from 'axios';

export default class EntryForm extends Component {
        constructor(props) {
        super(props);

        this.state = {
            address: "",
            image_urls: {}
            /* 
            entry_photo_url
            message
            location{
                longitude: 3647328474
                latitude: 3849596
            }
            user: user id
            */

        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleFile(e) {
        this.setState({image_urls: e.target.files});
    }
    update(field){
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    handleSubmit(e) {
        let ex = 0;
        e.preventDefault();
        const address = this.state.address
        const addressString = address.split(" ").join("+")
        const requestUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${addressString}&key=${window.apikey}`
             
        // const response = $.ajax({
        //     method: 'GET',
        //     url: requestUrl
        // })

        axios.get(requestUrl, {
            transformRequest: (data, headers) => {
                delete headers.common['Authorization']
                return data;
            }
        }).then(
            response => {
                debugger
                formatted_address = response.data.results[0].formatted_address
                newLatitude = response.data.results[0].geometry.location.lat
                newLongitude = response.data.results[0].geometry.location.lng
                this.setState({
                    address: formatted_address,
                    latitude: newLatitude,
                    longitude: newLongitude
                })
            })

            console.log(ex);
        let formatted_address, newLatitude, newLongitude
        
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="file" placeholder="ahhhhhhh" onChange={this.update("file")}/> 
                    <input type="text" value={this.state.address}  onChange={this.update("address")} />
                </form>
            </div>
        )
    }
}
