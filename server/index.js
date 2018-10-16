const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const app = express();

// Middleware:
app.use(cors('*'));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'build')));

// Routes:
app.get('/ping', (req, res) => {
  return res.send('pong');
});

app.listen(process.env.PORT || 8080);