const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateTripInput(data) {
    let errors = {};

    if (Validator.isEmpty(data.title)) {
      errors.entry_photo_url = 'A title is required';
    }
  
    if (Validator.isEmpty(data.user)) {
      errors.message = 'User info is empty';
    }

    return {
      errors,
      isValid: Object.keys(errors).length === 0
    };
  };