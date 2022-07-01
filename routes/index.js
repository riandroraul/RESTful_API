const express = require('express')
const { getAllBooks, addBooks, getBookById, updateBook, deleteBook } = require('../controller/booksController');


const router = express.Router();

router.get('/', getAllBooks)
router.get('/id/:id', getBookById)
router.post('/tambah', addBooks)
router.put('/ubah/:id', updateBook)
router.delete('/hapus/:id', deleteBook)

// router.put('/books/ubah', (req, res) => {
//   res.json({
//     status: 'ok',
//     message: 'berhasil',
//   })
// });

// router.delete('/books/hapus', (req, res) => {
//   res.json({
//     status: 'ok',
//     message: 'berhasil',
//   })
// })

module.exports = router