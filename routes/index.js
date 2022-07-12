const express = require('express')
const { getAllBooks, addBooks, getBookById, updateBook, deleteBook, apiBook } = require('../controller/booksController');
// const rateLimit = require('express-rate-limit')
// const limiter = rateLimit({
//     windowMs: 5 * 60000, // 5 minutes, 60000 = 1 minutes
//     max: 5 * 2, // 5x hit
//     message: 'too many request, wait a second!!!'
// });

const router = express.Router();
// router.use(limiter)

router.get('/books', getAllBooks)
// router.get('/api/books', apiBook)
router.get('/books/id/:id', getBookById)
router.post('/books/tambah', addBooks)
router.put('/books/ubah/:id', updateBook)
router.delete('/books/hapus/:id', deleteBook)


module.exports = router