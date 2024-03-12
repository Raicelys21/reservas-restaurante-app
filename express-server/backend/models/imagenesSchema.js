const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  filename: String,
  filepath: String,
  id_restaurante: String,
});

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;
