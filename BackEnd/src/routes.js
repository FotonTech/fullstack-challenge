const express = require('express')
const BooksController = require('./controllers/BooksController')

const routes = express.Router()

routes.get('/', (req, res) => {
  res.json({ message: 'Backend is Working!' })
})

routes.get('/books', BooksController.getBooks)
routes.get('/books/:_id', BooksController.getBookById)
routes.get('/books/search/:name', BooksController.getBookByQuery)
routes.post('/books', BooksController.createBook)
routes.delete('/books/:_id', BooksController.deleteBook)
routes.put('/books', BooksController.updateBook)

module.exports = routes