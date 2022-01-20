import React, { Component } from 'react'
import axios from 'axios';

export default class EntryForm extends Component {
        constructor(props) {
        super(props);
        this.state = Object.assign({}, this.props.entry, { photoFile: "" })
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleFile = this.handleFile.bind(this)
    }

    handleFile(e){
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        this.setState({photoFile: e.currentTarget.files[0], photoUrl: fileReader.results})
        fileReader.onloadend = () => {

        }
        if (file){
            fileReader.readAsDataURL(file);
        }
    }

    update(field){
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    handleFormData(state){
        let formData = new FormData();
        formData.append("entry[message]", state.message)
        formData.append("entry[title]", state.title)
        formData.append("entry[location][longitude]", state.location.longitude)
        formData.append("entry[location][latitude]", state.location.latitude)
        formData.append("entry[photo]", state.photoFile)
        formData.append("entry[user]", state.user)
        formData.append("entry[trip]", state.trip)
        return formData;
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
                const stateCopy = {
                    address: formatted_address,
                    location: {
                        latitude: newLatitude,
                        longitude: newLongitude
                    }
                }
                const newState = Object.assign({}, this.state, stateCopy)
                delete newState.address
                this.props.action(this.handleFormData(newState))
            }).then(this.props.closeModal())
            let formatted_address, newLatitude, newLongitude
    }

    render() {
        return (
            <div className='form-modal-container'>
                <form onSubmit={this.handleSubmit}>

                    <label> 
                        <input  type="text" 
                                value={this.state.address}  
                                onChange={this.update("address")} 
                                placeholder="Address"/>
                    </label>
                    <br></br>
                    <label> 
                        <input  
                                type="text" 
                                value={this.state.title} 
                                onChange={this.update("title")} 
                                placeholder="Title"/>
                    </label>
                    <br></br>
                    <label> 
                        <textarea  
                                value={this.state.message} 
                                onChange={this.update("message")}
                                placeholder="Message" />
                    </label>
                     <label> 
                        <input type="file" name="photo" onChange={this.handleFile}/> 
                    </label>
                    <br></br>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
