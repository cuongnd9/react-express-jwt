const express = require('express');
const passport = require('passport');

const userController = require('../controllers/user');

const router = express.Router();

router.post('/register', userController.postRegister);
router.post('/login', userController.postLogin);
router.get('/me', passport.authenticate('jwt', { session: false }), userController.getMe);

module.exports = router;
