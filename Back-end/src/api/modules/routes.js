const express = require('express');

const route = express.Router({ mergeParams: true });

route.post('/tasks', require('./tasks/controller/create'));

module.exports = route;