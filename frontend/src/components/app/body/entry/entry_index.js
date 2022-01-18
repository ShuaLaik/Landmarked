import React, { Component } from 'react'
import EntryItem from './entry_item';


export default class EntryIndex extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const {fetchEntries, userId} = this.props;
        fetchEntries(userId);
    }

    render() {
        const {entries} = this.props
        if (!entries) return null;
        
        return (
            <div>
                {entries.map(entry => (
                    <EntryItem entry={entry} key={Math.random()}/>
                ))}
            </div>
        )
    }
}
