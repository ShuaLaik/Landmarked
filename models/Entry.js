const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EntrySchema = new Schema({
    entry_photo_url: {
        type: String
    },
    title: {
        type: String,
        required: true
    },
    message: {  
        type: String,
        required: true
    },
    location: { type: Object,
        longitude: {
            type: Number,
            required: true
        },
        latitude: {
            type: Number,
            required: true
        }
    },
    trip: {
        type: mongoose.Types.ObjectId,
        ref: Trip,
        retuired: false
    },
    type: {
        type: String,
        required: true
    },
    location_id: String, // this is placeholder if/when we identify location with one number, until 
    // then we will use lat/long
    user: {
        type: mongoose.Types.ObjectId, 
        ref: User
    }
}, {
    timestamps: true
})

module.exports = Entry = mongoose.model('Entry', EntrySchema);


// var userSchema = new mongoose.Schema({
//     name: {type: String, required: true},
//     preferences: {type : { preference1 : String, preference2 : String}, default : null}
//   });
  