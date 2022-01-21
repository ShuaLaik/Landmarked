import React, { Component } from 'react'

export default class TripForm extends Component {
        constructor(props) {
        super(props);
        this.state = this.props.trip; 
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    update(field){
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state)
        this.props.closeModal()
    }

    render() {
        return (
                <form onSubmit={this.handleSubmit} className='show-container'>
                    <ul> 
                        <input className="h1" type="text" 
                        placeholder="Trip Title"
                                onChange={this.update('title')}
                                value={this.state.title}/> 
                                <h2></h2>
                                <textarea value="Enter a Trip Name above and hit enter to begin tracking your new adventure!"/>
                    <button>Submit</button>
                    </ul>
                    <div>
                        <img src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg"/>
                    </div>
                </form>
        )
    }
}
