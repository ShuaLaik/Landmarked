const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateEntryInput(data) {
    let errors = {};
  
    if (Validator.isEmpty(data.entry_photo_url)) {
      errors.entry_photo_url = 'A photo is required';
    }
  
    if (Validator.isEmpty(data.message)) {
      errors.message = 'Message field is required';
    }

    if (Validator.isEmpty(data.title)) {
      errors.message = 'title field is required';
    }

    if (Validator.isEmpty(data.location.longitude)) {
        errors.location.longitude = 'A longitude is required';
    }

    if (Validator.isEmpty(data.location.latitude)) {
        errors.location.latitude = 'A latitude is required';
    }
    
    if (Validator.isEmpty(data.user)) {
      errors.user = 'user field is required';
    }
  
    return {
      errors,
      isValid: Object.keys(errors).length === 0
    };
  };