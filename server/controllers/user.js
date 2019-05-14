const jwt = require('jsonwebtoken');
const gravatar = require('gravatar');
const bcrypt = require('bcrypt');

const User = require('../models/User');
const validateRegisterInput = require('../validations/register');
const validateLoginInput = require('../validations/login');

module.exports.postRegister = (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const { name, email, password } = req.body;

  User.findOne({ email })
    .then(user => {
      if (user) {
        return res.status(400).json({
          email: 'Email already exists'
        });
      }

      const avatar = gravatar.url(email, {
        s: '200',
        r: 'pg',
        d: 'mm'
      });

      const newUser = new User({ name, email, password, avatar });

      bcrypt.hash(newUser.password, 10).then(hash => {
        newUser.password = hash;
        newUser
          .save()
          .then(user => res.status(200).json({ result: user }))
          .catch(err => res.status(400).json({ message: err }));
      });
    })
    .catch(err => res.status(400).json({ message: err }));
};

module.exports.postLogin = (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const { email, password } = req.body;

  User.findOne({ email })
    .then(user => {
      if (!user) {
        return res.status(404).json({ email: 'User not found' });
      }

      bcrypt
        .compare(password, user.password)
        .then(isMatch => {
          if (!isMatch) {
            return res.status(400).json({ password: 'Incorrect password' });
          }

          const { id, name, avatar } = user;
          const payload = { id, name, avatar };
          jwt.sign(
            payload,
            process.env.JWT_SECRET,
            {
              expiresIn: '2h'
            },
            (err, token) => {
              if (err) {
                return res.status(400).json({ message: err });
              }
              res.status(200).json({ token });
            }
          );
        })
        .catch(err => res.status(400).json({ message: err }));
    })
    .catch(err => res.status(400).json({ message: err }));
};

module.exports.getMe = (req, res) => {
  const { id, name, email, avatar } = req.user;
  return res.status(200).json({
    result: {
      id,
      name,
      email,
      avatar
    }
  });
};
