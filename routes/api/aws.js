const express = require('express')
const router = express.Router()               // router will be used to handle the request.
const multer = require('multer')              // multer will be used to handle the form data.
const Aws = require('aws-sdk')                // aws-sdk library will used to upload image to s3 bucket.
const Entry = require('../models/Entry')  // our product model.
require("dotenv/config")                      // for using the environment variables that stores the confedential information.


// creating the storage variable to upload the file and providing the destination folder, 
// if nothing is provided in the callback it will get uploaded in main directory

const storage = multer.memoryStorage({
    destination: function (req, file, cb) {
        cb(null, '')
    }
})

// below variable is define to check the type of file which is uploaded

const filefilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg') {
        cb(null, true)
    } else {
        cb(null, false)
    }
}

// defining the upload variable for the configuration of photo being uploaded
const upload = multer({ storage: storage, fileFilter: filefilter });

// Now creating the S3 instance which will be used in uploading photo to s3 bucket.
const s3 = new Aws.S3({
    accessKeyId:process.env.AWS_ACCESS_KEY_ID,              // accessKeyId that is stored in .env file
    secretAccessKey:process.env.AWS_ACCESS_KEY_SECRET       // secretAccessKey is also store in .env file
})

// now how to handle the post request and to upload photo (upload photo using the key defined below in upload.single ie: productimage )
router.post('/', upload.single('productimage'), (req, res) => {
    console.log(req.file)  // to check the data in the console that is being uploaded
    // Definning the params variable to uplaod the photo
    
    const params = {
        Bucket:process.env.AWS_BUCKET_NAME,      // bucket that we made earlier
        Key:req.file.originalname,               // Name of the image
        Body:req.file.buffer,                    // Body which will contain the image in buffer format
        ACL:"public-read-write",                 // defining the permissions to get the public link
        ContentType:"image/jpeg"                 // Necessary to define the image content-type to view the photo in the browser with the link
    };
  
   // uplaoding the photo using s3 instance and saving the link in the database.
    
    s3.upload(params,(error,data)=>{
        if(error){
            res.status(500).send({"err":error})  // if we get any error while uploading error message will be returned.
        }
  
   // If not then below code will be executed
        
    console.log(data)                      // this will give the information about the object in which photo is stored 
    
   // saving the information in the database.   
    const product = new Product({
            name: req.body.name,
            price: req.body.price,
            productImage: data.Location
        });
        product.save()
            .then(result => {
                res.status(200).send({
                    _id: result._id,
                    name: result.name,
                    price: result.price,
                    productImage: data.Location,
                })
            })
            .catch(err => {
                res.send({ message: err })
          })
    })
})


module.exports = router