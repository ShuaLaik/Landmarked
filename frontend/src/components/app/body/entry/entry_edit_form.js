import React, { Component } from 'react'
import parseDate from '../../../../util/parse_date';

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
                <form onSubmit={this.handleSubmit} className="show-container">
                    <ul>
                        <input  type="text" className="h1"
                                onChange={this.update('title')}
                                value={this.state.title}/> 
                                <h2>{parseDate(this.state.createdAt)}</h2>
                        <textarea  type="text" 
                                onChange={this.update('message')}
                                value={this.state.message}/> 
                    <button>Submit</button>
                    </ul>
                    <div><img src={this.state.entry_photo_url}/></div>
                </form>
        )
    }
}
