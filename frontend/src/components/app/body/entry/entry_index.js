import React, { Component } from 'react'
import EntryItemContainer from './entry_item_container';


export default class EntryIndex extends Component {
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
                    <EntryItemContainer entry={entry} key={Math.random()}/>
                ))}
            </div>
        )
    }
}


