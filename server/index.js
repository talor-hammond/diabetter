const express = require('express');
const bodyParser = require('body-parser');
// const path = require('path');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Router modules:
const auth = require('./routes/auth');

// Middleware:
app.use(cors('*'));
app.use(bodyParser.json());

// Api-routes:
app.use('/api/v1/auth', auth);

app.listen(process.env.PORT || 8080);