import React, { Component } from 'react'

export default class Location extends Component {
    componentDidMount() {

    }

    render() {
        //will key in properly once api is working
        const { locationId, description, photoUrl } = this.props.location;
        return (
            <div className='location-items'>
                <img src={photoUrl}/>
                <p>{description}</p>
            </div>
        )
    }
}
