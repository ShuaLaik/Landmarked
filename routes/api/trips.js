const express = require("express");
const router = express.Router();
const Trip = require('../../models/Trip');
const validateTripInput = require('../../validation/trip');

router.get(`/user/:user_id`, (req, res) => { // given user ID in params, returns all user's entries
    Trip
    .find({ user: req.params.user_id }) 
    .then(trips => res.json(trips))
    .catch(err => res.status(404).json({ notripsfound: 'no trips found from this user' }
    )
    );
});

router.get(`/:trip_id`, (req, res) => { // given user ID in params, returns all user's entries
    const { errors, isValid } = validateEntryInput(req.body);
    
    if (!isValid) {
        return res.status(400).json(errors);
    }
    
    User.findOne({ _id: req.body.trip_id })
        .then(trip => res.json(trip))
        .catch(err => res.status(404).json({ notripsfound: 'no trips found for this id' }
    )
    );
});

router.post(`/`, (req, res) => { 
    const { errors, isValid } = validateTripInput(req.body);
    
    if (!isValid) {
      return res.status(400).json(errors);
    }
    const newTrip = new Trip({
        title: req.body.title,
        user: req.body.user,
        type: 'trip'
    });
    newTrip.save()
        .then(trip => res.json(trip))
        .catch(err => res.status(404).json({ invalidtrip: 'trip is invalid' }))
    });

router.patch('/:trip_id', (req, res) => {
    const { errors, isValid } = validateTripInput(req.body);
    
    if (!isValid) {
        return res.status(400).json(errors);
    }
    
    Entry.findByIdAndUpdate(req.params.trip_id, req.body)
        .then(trip => res.json(trip))
        .catch(err => res.status(404).json({ noentryfound: 'no trip found from this trip ID' }
    )
    );
    
});

router.delete('/:trip_id', (req, res) => { // given TRIP ID, deletes trip,
    // does not return deleted object, returns delete confirmation

    
    Trip
    .deleteOne({_id: req.params.trip_id})
    .catch(err => res.status(404).json({ notripfound: 'no trips found' }))

    const entriesArr = [];

    Entry.updateMany({trip: req.params.trip_id}, {$set: {trip: undefined}} )

    Entry
     .find({trip: req.params.trip_id})
     .then(entries => {
         Object.values(entries).forEach( entry => {
             delete entry.trip
             entry.update(entry)
             entriesArr.push(entry)                        
         })
         return entriesArr
    })
    .then(entries => res.json(entries))
    .catch(err => res.status(404).json({ noentriesfound: 'no trip found from this trip ID'}))

    
     
    // Entry  
    //     .find({ trip: req.params.trip_id})
});

module.exports = router;