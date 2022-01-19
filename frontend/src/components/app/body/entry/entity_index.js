import React, { Component } from 'react'
import EntryItemContainer from './entry_item_container';
import TripItemContainer from '../trip/trip_item_container';


export default class EntityIndex extends Component {
    componentDidMount() {
        const {action, userId} = this.props;
        action(userId);
    }

    render() {
        const { entities, type } = this.props
        if (!entities) return null;
        
        return (
            <div className={`${type}-index`}>
                {entities.map(entity => {
                    switch(type) {
                        case 'entry':
                            return(
                            <EntryItemContainer 
                            entry={entity} 
                            key={Math.random()}/>)
                        case 'trip':
                            return(
                            <TripItemContainer 
                            trip={entity} 
                            key={Math.random()}/>)
                    }
                })}
            </div>
        )
    }
}