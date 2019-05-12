require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');

const userRouter = require('./routes/user');
const configPassport = require('./config/passport');

// Mongoose connect.
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });

const app = express();

const port = process.env.PORT || 8000;

// Passport config.
configPassport(passport);

// Passport.
app.use(passport.initialize());
app.use(passport.session());

// Body bodyParser.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routers.
app.use('/api/users', userRouter);

app.get('/', (req, res) => res.send('👋 Chao Xin'));

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
