const express = require("express");
const router = express.Router();
const Entry = require('../../models/Entry');
const validateEntryInput = require('../../validation/entry');

router.get("/test", (req, res) => res.json({ msg: "This is the entries route" }));


module.exports = router;

router.get(`/user/:user_id`, (req, res) => { // given user ID in params, returns all user's entries
    Entry
        .find({ user: req.params.user_id }) 
        .then(entries => res.json(entries))
        .catch(err => res.status(404).json({ noentriesfound: 'no entries found from this user' }
        )
    );
});

router.get('/location/:location_id', (req, res) => { // given location ID in params, returns all location's entries
    Entry  
        .find({ location: req.params.location_id})
        .then(entries => res.json(entries))
        .catch(err => res.status(404).json({ noentriesfound: 'no entries found from this location' }
        )
    );
});

router.post(`/`, (req, res) => { // given data object, creates new entry
    const { errors, isValid } = validateEntryInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newEntry = new Entry({
        entry_photo_url: req.body.entry_photo_url,
        message: req.body.message,
        location: req.body.location, // latitude/longitude embedded
        // may need to add locationId here
        user: req.body.user
    });

    newEntry.save()
        .then(entry => res.json(entry))
});

router.patch('/:entry_id', (req, res) => {
    const { errors, isValid } = validateEntryInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    Entry.findByIdAndUpdate(req.params.entry_id, req.body)
        .then(entry => res.json(entry))
        .catch(err => res.status(404).json({ noentryfound: 'no entry found from this entry ID' }
        )
    );

  })

router.delete('/:entry_id', (req, res) => { // given ENTRY ID, deletes entry,
    // does not return deleted object, returns delete confirmation
    Entry
        .deleteOne({_id: req.params.entry_id})
        .then(entry => res.json(entry))
        .catch(err => res.status(404).json({ noentryfound: 'no entries found' }))
});