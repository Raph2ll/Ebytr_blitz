const express = require('express');

const route = express.Router({ mergeParams: true });

const home = require('./home');

route.use('/home', home);

module.exports = route;
