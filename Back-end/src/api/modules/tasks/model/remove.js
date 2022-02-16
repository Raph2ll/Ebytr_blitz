const { ObjectId } = require('mongodb');
const connection = require('../../global/model/connection');

const remove = async (id) => {
  if (!ObjectId.isValid(id)) return null;

  await (await connection())
    .collection('Ebyrt').deleteOne({ _id: ObjectId(id) });
};

module.exports = remove;
