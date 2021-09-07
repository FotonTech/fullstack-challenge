const mongoose = require('mongoose')

const DataSchema = new mongoose.Schema({
  name: String,
  author: String,
  image: String,
  description: String,
})

const books = mongoose.model('Books', DataSchema)

module.exports = books