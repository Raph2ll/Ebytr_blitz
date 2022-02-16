const { ObjectId } = require('mongodb');
const connection = require('../../global/model/connection');

const findById = async (id) => {
    if (!ObjectId.isValid(id)) return null;
    const result = await (await connection())
    .collection('Ebyrt').findOne({ _id: new ObjectId(id) });
 return result;
};

module.exports = findById;