const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateEntryInput(data) {
    let errors = {};
  
    data.username = validText(data.username) ? data.username : '';
    data.password = validText(data.password) ? data.password : '';
  
  
    if (Validator.isEmpty(data.entry_photo_url)) {
      errors.entry_photo_url = 'A photo is required';
    }
  
    if (Validator.isEmpty(data.message)) {
      errors.message = 'Message field is required';
    }

    // if (Validator.isEmpty(data.landmark)) {
    //     errors.landmark = 'A landmark is required';
    // }
    
    //   if (Validator.isEmpty(data.location)) {
    //     errors.location = 'Location field is required';
    //   }

    if (Validator.isEmpty(data.traveler)) {
        errors.traveler = 'Traveler field is required';
    }
  
    return {
      errors,
      isValid: Object.keys(errors).length === 0
    };
  };