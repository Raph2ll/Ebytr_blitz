const model = require('../model/create');
const error = require('../middleware/error');

const isValid = ({ task }) => {
    if (!task) return error.invalidEntries; 
};

const create = async ({ task }) => {
    const validation = isValid({ task });
    if (validation) return validation;

    const newTask = await model({ task });
    return newTask;
};

module.exports = create;