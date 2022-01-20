import React, { Component } from 'react'

export default class TripEditForm extends Component {
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
        debugger
        e.preventDefault();
        this.props.updateTrip(this.state)
        this.props.closeModal()
    }

    render() {
        return (
            <div className='form-modal-container'>
                <form onSubmit={this.handleSubmit}>
                    <label> Trip Title
                        <input  type="text" 
                                onChange={this.update('title')}
                                value={this.state.title}/> 
                    </label>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}