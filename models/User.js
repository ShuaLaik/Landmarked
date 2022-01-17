const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  bio: {
    type: String
  },
  password: {
    type: String,
    required: true
  },
  profile_photo_url: {
      type: String,
  }
}, {
  timestamps: true
})

module.exports = User = mongoose.model('User', UserSchema);