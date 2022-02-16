const statusCodes = require('http-status-codes').StatusCodes;
const service = require('../service/create');

module.exports = async (req, res, next) => {
try {
  const { task } = req.body;

  const newTask = await service({ task });

    if (newTask.err) {
      return res.status(statusCodes.BAD_REQUEST).json(newTask.err);
    }

  return res.status(statusCodes.CREATED).json( newTask );
} catch (err) {
    return next(err);
}
};