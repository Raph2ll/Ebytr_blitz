const express = require('express');

const route = express.Router({ mergeParams: true });

route.post('/tasks', require('./tasks/controller/create'));
route.get('/tasks', require('./tasks/controller/list'));
route.get('/tasks/:id', require('./tasks/controller/findById'));
route.put('/tasks/:id', require('./tasks/controller/update'));
route.delete('/tasks/:id', require('./tasks/controller/remove'));

module.exports = route;