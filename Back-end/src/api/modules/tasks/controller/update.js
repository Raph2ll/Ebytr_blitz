const statusCodes = require('http-status-codes').StatusCodes;
const service = require('../service/update');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { task } = req.body

    const result = await service({ id, task });

      if (result.err) return res.status(statusCodes.BAD_REQUEST).json(result.err);

    return res.status(statusCodes.OK).json(result);
  } catch (err) {
    return next(err);
  }
};