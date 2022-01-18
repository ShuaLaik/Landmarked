import React, { Component } from 'react'
import axios from 'axios';

export default class EntryForm extends Component {
        constructor(props) {
        super(props);
        this.state = this.props.entry
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
        e.preventDefault();

        const address = this.state.address
        const addressString = address.split(" ").join("+")
        const requestUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${addressString}&key=${window.apikey}`
        axios.get(requestUrl, {
            transformRequest: (data, headers) => {
                delete headers.common['Authorization']
                return data;
            }
        }).then(
            response => {
                formatted_address = response.data.results[0].formatted_address
                newLatitude = String(response.data.results[0].geometry.location.lat)
                newLongitude = String(response.data.results[0].geometry.location.lng)
                const n = {
                    address: formatted_address,
                    location: {
                        latitude: newLatitude,
                        longitude: newLongitude
                    }
                }
                const newState = Object.assign({}, this.state, n)
                delete newState.address
                debugger
                this.props.action(newState)
            })

        let formatted_address, newLatitude, newLongitude
        
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="file" onChange={this.update("file")}/> 
                    <input type="text" value={this.state.address}  onChange={this.update("address")} />
                    <input type="text" value={this.state.message} onChange={this.update("message")} />
                    <button>Submit</button>

                </form>
            </div>
        )
    }
}
