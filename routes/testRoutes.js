const express = require('express')
const { getAllBooks, addBooks, getBookById, updateBook, deleteBook } = require('../controller/testingController');

const routerTesting = express.Router();

routerTesting.get('/books', getAllBooks)
routerTesting.get('/books/id/:id', getBookById)
routerTesting.post('/books/tambah', addBooks)
routerTesting.put('/books/ubah/:id', updateBook)
routerTesting.delete('/books/hapus/:id', deleteBook)


module.exports = routerTesting