const connection = require('../../global/model/connection');

const list = async () => (await connection())
.collection('recipes').find().toArray();

module.exports = list; 