const model = require('../model/remove');
const findById = require('../model/findById');
const { notFound } = require('../middleware/error');

const isValid = async (id ) => {
  const findTask = await findById(id);
    if (!findTask) return notFound;
};

const update = async (id) => {
  const validation = await isValid(id);
    if (validation) return validation;

    const result = await model(id);

  return result;
}; 

module.exports = update;