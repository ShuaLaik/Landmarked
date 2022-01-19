const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TripSchema = new Schema({
    name: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: User
    }, 
}, {
    timestamps: true
})

module.exports = Trip = mongoose.model('Trip', TripSchema);