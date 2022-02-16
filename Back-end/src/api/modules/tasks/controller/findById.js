const statusCodes = require('http-status-codes').StatusCodes;
const service = require('../service/findById');
const { notFound } = require('../middleware/error');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;

    const recipeById = await service(id);

    if (!recipeById) {
      return res.status(statusCodes.NOT_FOUND).json(notFound.err);
    }

    return res.status(statusCodes.OK).json(recipeById);
  } catch (err) {
    next(err);
  }
}; 