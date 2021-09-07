const Book = require('../models/Book')

module.exports = {
  async getBooks(req, res) {
    const books = await Book.find()
    res.json(books)
  },

  async getBookById({ params: { _id } }, res) {
    const book = await Book.findOne({ _id })
    res.json(book)
  },

  async getBookByQuery({ params: { name } }, res) {
    const regex = new RegExp(name, 'i');
    return await Book.find({ name: regex }, (err, data) => {
      data ? res.json(data) : console.log('err: ', err)
    })
  },

  async createBook({ body: { name, author, description, image } }, res) {
    const data = { name, author, description, image }
    const book = await Book.create(data)
    res.json(book)
  },

  async deleteBook({ params: { _id } }, res) {
    const book = await Book.findByIdAndDelete({ _id })
    res.json(book)
  },

  async updateBook({ body: { _id, name, author, description, image } }, res) {
    const data = { name, author, description, image }
    const book = await Book.findByIdAndUpdate({ _id }, data, { new: true })
    res.json(book)
  }
}