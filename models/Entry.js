const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EntrySchema = new Schema({
    entry_photo_url: {
        type: String
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
    location_id: String, // this is placeholder if/when we identify location with one number, until 
    // then we will use lat/long
    user: {
        type: Schema.Types.ObjectId,
        ref: User
    }
}, {
    timestamps: true
})

module.exports = Entry = mongoose.model('Entry', EntrySchema);

