const statusCodes = require('http-status-codes').StatusCodes;
const model = require('../model/list');

const list = async () => model(); 

module.exports = list; 