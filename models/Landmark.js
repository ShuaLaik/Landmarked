const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LandmarkSchema = new Schema({
    title: String,
    category: {
        type: String,
        required: true
    },
    location: {
        latitude: {
            type: Number,
            required: true
        },
        longitude: {
            type: Number,
            required: true
        }
    }
})