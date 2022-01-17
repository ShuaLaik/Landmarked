const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => res.json({ msg: "This is the entrys route" }));


module.exports = router;

//GET 'entrys/:userId'
//GET 'entrys/:landmarkId`
//POST 'entrys'
//PATCH `entrys/:entryId`
//DELETE `entrys/:entryId`

