const model = require('../model/findById');

const findById = async (id) => model(id);
module.exports = findById;