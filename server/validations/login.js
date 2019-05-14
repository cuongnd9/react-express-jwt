const validator = require('validator');

const validateLoginInput = data => {
  const errors = {};
  data.email = data.email || '';
  data.password = data.password || '';

  if (!validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  if (validator.isEmpty(data.email)) {
    errors.email = 'Email is required';
  }

  if (!validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = 'Password must be between 6 to 30 chars';
  }

  if (validator.isEmpty(data.password)) {
    errors.password = 'Password is required';
  }

  return {
    errors,
    isValid: !Object.keys(errors).length
  };
}

module.exports = validateLoginInput;