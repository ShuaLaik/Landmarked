const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TripSchema = new Schema({
    title: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: User
    }, 
    type: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = Trip = mongoose.model('Trip', TripSchema);