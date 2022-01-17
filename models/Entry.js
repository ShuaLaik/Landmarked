const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EntrySchema = new Schema({
    entry_photo_url: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    //possibly uneeded?
    location: {
        latitude: {
            type: Number,
            required: true
        },
        longitude: {
            type: Number,
            required: true
        }
    },
    landmark: {
        type: Schema.Types.ObjectId,
        ref: Landmark
    },
    traveler: {
        type: Schema.Types.ObjectId,
        ref: User
    },
    timestamps: true
})

module.exports = Entry = mongoose.model('Entry', EntrySchema);

