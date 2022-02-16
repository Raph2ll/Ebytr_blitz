const express = require('express');

const route = express.Router({ mergeParams: true });

route.use('/task', require('./tasks/controller/create'));

module.exports = route;