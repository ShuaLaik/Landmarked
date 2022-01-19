import React, { Component } from 'react'
import EntryItem from './entry_item';


export default class EntryIndex extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const {fetchAllUserEntries, userId} = this.props;
        fetchAllUserEntries(userId);
    }

    render() {
        const {entries} = this.props
        if (!entries) return null;
        
        return (
            <div className="entry-index">
                {entries.map(entry => (
                    <EntryItem entry={entry} key={Math.random()}/>
                ))}
            </div>
        )
    }
}
