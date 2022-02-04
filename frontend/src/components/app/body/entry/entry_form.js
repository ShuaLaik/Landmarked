import React, { Component } from 'react'
import axios from 'axios';

export default class EntryForm extends Component {
        constructor(props) {
        super(props);
        this.state = Object.assign({}, this.props.entry, { photoFile: "", photoUrl: "https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg" })
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleFile = this.handleFile.bind(this)
        this.handleFormData = this.handleFormData.bind(this)
        this.handleErrors = this.handleErrors.bind(this)
        this.renderErrors = this.renderErrors.bind(this)
    }

    handleFile(e){
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = function () {
            this.setState({photoFile: file, photoUrl: fileReader.result })
        }.bind(this)
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
        debugger;
        let formData = new FormData();
        formData.append("entry[message]", state.message)
        formData.append("entry[title]", state.title)
        // if (state.address){
            formData.append("entry[location][longitude]", state.location.longitude)
            formData.append("entry[location][latitude]", state.location.latitude)
        // } else {
        //     formData.append("entry[location][longitude]", "")
        //     formData.append("entry[location][latitude]", "")
        // }
        formData.append("entry[photo]", state.photoFile)
        formData.append("entry[user]", state.user)
        if (this.state.trip) {
            formData.append("entry[trip]", state.trip)
        }
        return formData;
    }

    handleSubmit(e) {
        e.preventDefault();
        // this.setState({errors: []})
        if (this.handleErrors()) return null;
        debugger
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

    handleErrors(e){
        let issue = false;
        let err = []
        if (this.state.photoFile === "") {
            err = err.concat(["A Photo is Required"])
            issue = true
        }
        if (this.state.address === ""){
            err = err.concat(["A Address is Required"])
            issue = true
        }
        if (this.state.title === ""){
            err = err.concat(["A title is Required"])      
            issue = true    
        }
        if (this.state.message === ""){
            err = err.concat(["A message is Required"])
            issue = true
        }
        debugger
        this.setState({errors: err})
        // if (err.length) {
        //     return true;
        // }
        return issue;
    }

    renderErrors(){
        if (!this.state.errors.length) return null
        return <div className="ul">
            {this.state.errors.map(error => {
                return <h5>{error}</h5>
            })}
        </div>
    }

    render() {
        debugger
        return (
                <form onSubmit={this.handleSubmit} className="show-container">
                    <ul>
                        <input  
                            type="text"
                            className="h1" 
                            value={this.state.title} 
                            onChange={this.update("title")} 
                            placeholder="Title"/>
                        <input  type="text" 
                            className="h2"
                            value={this.state.address}  
                            onChange={this.update("address")} 
                            placeholder="Address"/>

                        <textarea  
                            value={this.state.message} 
                            onChange={this.update("message")}
                            placeholder="Message" />
                        <input type="file" name="photo" onChange={this.handleFile}/> 
                        <button>Submit</button>
                        <br/>
                        <br />
                        </ul>
                        <div className="second-page">
                        <div>
                        {this.state.photoFile === "" ? null : <img src={this.state.photoUrl} />}
                        {this.renderErrors()}
                        </div>
                        </div>
                </form>
        )
    }
}
