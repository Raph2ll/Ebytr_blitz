const model = require('../model/update');
const findById = require('../model/findById');
const { notFound } = require('../middleware/error');

const isValid = async ({ id }) => {
    const findRecipe = await findById(id);
    if (!findRecipe) return notFound;
};

  const update = async ({ id, task }) => {
    const validation = await isValid({ id, task });
    if (validation) return validation;

    const result = await model({ id, task });

    return { ...result };
}; 

module.exports = update; 