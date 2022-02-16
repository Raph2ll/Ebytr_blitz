const { ObjectId } = require('mongodb');
const { format } = require('date-fns');
const connection = require('../../global/model/connection');

const timestamp = format(new Date(), 'dd-MM-yyy HH:mm:ss');

const update = async ({ id, task }) => {
  if (!ObjectId.isValid(id)) {
    return null;
  }
  await (await connection())
  .collection('Ebyrt').updateOne(
    { _id: ObjectId(id) },
    { $set: { task, date: timestamp } },
  );

  return {
    _id: id,
    task,
    date: timestamp,
  };
};

  module.exports = update;
