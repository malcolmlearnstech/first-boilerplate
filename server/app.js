const express = require('express');
const app = express();
const path = require('path');

//setting up logging middleware
const morgan = require('morgan');
app.use(morgan('dev'));

//setting up static middleware
app.use(express.static(path.join(__dirname, '../public')));

//setting up parsing middleware
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//mount API routes on /api
app.use('/api', require('./apiRoutes'));

//server will serve up the index.html for any requests that don't match an existing API route
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

//any error that occurs due to issues with your server
app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

//setup Express to listen for requests
const port = process.env.PORT || 3000;

module.exports = app;
