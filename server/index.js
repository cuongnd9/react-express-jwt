require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });

const app = express();

const port = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => res.send('👋 Chao Xin'))

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
