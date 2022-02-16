const express = require('express');

const route = express.Router({ mergeParams: true });

route.post('/tasks', require('./tasks/controller/create'));
route.get('/tasks', require('./tasks/controller/list'));

module.exports = route;