const express = require('express')
const { getAllBooks, addBooks, getBookById, updateBook, deleteBook } = require('../controller/booksController');
const rateLimit = require('express-rate-limit')
const limiter = rateLimit({
    windowMs: 5 * 60000, // 5 minutes, 60000 = 1 minutes
    max: 5 * 2, // 5x hit
    message: 'too many request, wait a second!!!'
});

const router = express.Router();
router.use(limiter)

router.get('/books', limiter, getAllBooks)
router.get('/books/id/:id', limiter, getBookById)
router.post('/books/tambah', limiter, addBooks)
router.put('/books/ubah/:id', limiter, updateBook)
router.delete('/books/hapus/:id', limiter, deleteBook)


module.exports = router