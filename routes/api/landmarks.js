const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => res.json({ msg: "This is the landmarks route" }));


module.exports = router;

// GET `/landmarks/:landmarkId`
// POST `/landmarks`
