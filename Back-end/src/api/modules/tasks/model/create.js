const { format } = require('date-fns');
const connection = require('../../global/model/connection');

const timestamp = format(new Date(), 'dd-MM-yyy HH:mm:ss');

const create = async ({ task }) => {
  const result = await (await connection())
  .collection('Ebyrt').insertOne({ task, date: timestamp });
    return { 
      _id: result.insertedId,      
      task,
      date: timestamp,
    };
  };

module.exports = create;
