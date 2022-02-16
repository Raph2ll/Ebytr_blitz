const statusCodes = require('http-status-codes').StatusCodes;
const service = require('../service/list');

module.exports = async (req, res, next) => {
try {
  const result = await service();
  return res.status(statusCodes.OK).json(result);
} catch (err) {
    return next(err);
}
};