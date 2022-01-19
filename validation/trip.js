const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateTripInput(data) {
    let errors = {};

    data.username = validText(data.user) ? data.user : '';
    data.password = validText(data.name) ? data.name : '';
  
    if (Validator.isEmpty(data.name)) {
      errors.entry_photo_url = 'A name is required';
    }
  
    if (Validator.isEmpty(data.user)) {
      errors.message = 'User info is empty';
    }

    return {
      errors,
      isValid: Object.keys(errors).length === 0
    };
  };