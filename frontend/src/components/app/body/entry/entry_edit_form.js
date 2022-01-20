import React, { Component } from 'react'

export default class EntryEditForm extends Component {
        constructor(props) {
        super(props);
        this.state = this.props.entry; 
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    update(field){
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateEntry(this.state)
        this.props.closeModal()
    }

    render() {
        return (
            <div className='form-modal-container'>
                <form onSubmit={this.handleSubmit}>
                    <label> Entry Title
                        <input  type="text" 
                                onChange={this.update('title')}
                                value={this.state.title}/> 
                    </label>
                    <label> Entry Message
                        <input  type="text" 
                                onChange={this.update('message')}
                                value={this.state.message}/> 
                    </label>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
