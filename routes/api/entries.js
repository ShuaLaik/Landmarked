const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => res.json({ msg: "This is the entries route" }));


module.exports = router;

router.get(`/user/:user_id`, (req, res) => {
    Entry
        .find({ user: req.params.user_id })
        .then(entries => res.json(entries))
        .catch(err => res.status(404).json({ noentriesfound: 'no entries found from this user' }
        )
    );
});

router.post(`/`, (req, res) => {

    const { errors, isValid } = validateEntryInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newEntry = new Entry({
        entry_photo_url: req.body.entry_photo_url,
        message: req.body.message,
        landmark: req.body.landmark,
        traveler: req.body.traveler
    });
    
    newEntry.save()
        .then(entry => res.json(entry))

});