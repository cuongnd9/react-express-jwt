const validator = require('validator');

const validateRegisterInput = data => {
  const errors = {};
  data.name = data.name || '';
  data.email = data.email || '';
  data.password = data.password || '';
  data.confirmPassword = data.confirmPassword || '';

  if (!validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = 'Name must be between 2 to 30 chars';
  }

  if (validator.isEmpty(data.name)) {
    errors.name = 'Name is required';
  }

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

  if (!validator.isLength(data.confirmPassword, { min: 6, max: 30 })) {
    errors.confirmPassword = 'Password must be between 6 to 30 chars';
  }

  if (validator.isEmpty(data.password)) {
    errors.confirmPassword = 'Password is required';
  }

  if (!validator.equals(data.password, data.confirmPassword)) {
    errors.confirmPassword = 'Password and confirm password must match';
  }

  return {
    errors,
    isValid: !Object.keys(errors).length
  };
};

module.exports = validateRegisterInput;
