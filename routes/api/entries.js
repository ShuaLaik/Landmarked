const express = require("express");
const router = express.Router();
const Entry = require('../../models/Entry');
const validateEntryInput = require('../../validation/entry');

// const multer = require('multer')              // multer will be used to handle the form data.
// const Aws = require('aws-sdk')                // aws-sdk library will used to upload image to s3 bucket.
// // require("dotenv/config")                      // for using the environment variables that stores the confedential information.


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

// AWS START

// const storage = multer.memoryStorage({
//     destination: function (req, file, cb) {
//         cb(null, '')
//     }
// })

// const filefilter = (req, file, cb) => {
//     if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg') {
//         cb(null, true)
//     } else {
//         cb(null, false)
//     }
// }

// const upload = multer({ storage: storage, fileFilter: filefilter });

// const s3 = new Aws.S3({
//     accessKeyId:process.env.AWS_ACCESS_KEY_ID,              // accessKeyId that is stored in .env file
//     secretAccessKey:process.env.AWS_ACCESS_KEY_SECRET       // secretAccessKey is also store in .env file
// })
//upload.single('productimage')

router.post(`/`, (req, res) => { // given data object, creates new entry
    const { errors, isValid } = validateEntryInput(req.body);
    
    if (!isValid) {
        return res.status(400).json(errors);
    }
    
    // const params = {
    //     Bucket:process.env.AWS_BUCKET_NAME,      // bucket that we made earlier
    //     Key:req.file.originalname,               // Name of the image
    //     Body:req.file.buffer,                    // Body which will contain the image in buffer format
    //     ACL:"public-read-write",                 // defining the permissions to get the public link
    //     ContentType:"image/jpeg"                 // Necessary to define the image content-type to view the photo in the browser with the link
    // };
    
    // s3.upload(params,(error,data)=>{
    //     if(error){
    //         res.status(500).send({"err":error})  // if we get any error while uploading error message will be returned.
    //     }
        
        
        
        
        const newEntry = new Entry({
            entry_photo_url: req.body.entry_photo_url,
            message: req.body.message,
            location: req.body.location, // latitude/longitude embedded
            // may need to add locationId here
            user: req.body.user
        });
        newEntry.save()
        .then(entry => res.json(entry))
    // });
})


module.exports = router;

