const connection = require('../../global/model/connection');

const list = async () => (await connection())
.collection('Ebyrt').find().toArray();

module.exports = list; 