const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateEntryInput(data) {
    let errors = {};
  

    // if (Validator.isEmpty(data.photo)) {
    //   errors.entry_photo_url = 'A photo is required';
    // }
  
    if (Validator.isEmpty(data.message)) {
      errors.message = 'Message field is required';
    }

    if (Validator.isEmpty(data.title)) {
      errors.title = 'title field is required';
    }






    if (Validator.isEmpty(data.location.latitude)) {
        errors.location = 'A location is required';
    }
    
    return {
      errors,
      isValid: Object.keys(errors).length === 0
    };
  };