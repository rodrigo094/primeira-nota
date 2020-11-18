const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Mentions', schema);