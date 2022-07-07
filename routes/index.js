const express = require('express')
const { getAllBooks, addBooks, getBookById, updateBook, deleteBook } = require('../controller/booksController');
const rateLimit = require('express-rate-limit')
const limiter = rateLimit({
    windowMs: 5 * 60000, // 5 minutes, 60000 = 1 minutes
    max: 5 * 2,
    message: 'too many request, wait a second!!!'
});

const router = express.Router();
router.use(limiter)

router.get('/books', limiter, getAllBooks)
    /**
     * @swagger
     * /books
     * get: 
     *  ringkasan: mengembalikan semua daftar buku 
     *  response: 
     *  200: 
     *   content: 
     *     aplication/json:
     *       schema:
     *         type: array
     *           items: 
     *             $ref: '#components/schemas/Book'
     */

router.get('/book/id/:id', limiter, getBookById)

/**
 * @swagger
 * /books/id/{id}:
 * get: 
 *  ringkasan: mengembalikan data buku berdasarkan  id
 *  tags: [books]
 *  parameters: 
 *     in: path
 *     name: id
 *     schema: 
 *         type: string
 *         required: true
 *   description: id buku
 *     response: 
 *       200: 
 *         description: data buku berdasarkan id
 *         content: 
 *           aplication/json:
 *             schema:
 *                $ref: '#components/schemas/Book'
 *       404:
 *         description: data buku berdasarkan id
 */
router.post('/tambah', limiter, addBooks)
router.put('/ubah/:id', limiter, updateBook)
router.delete('/hapus/:id', limiter, deleteBook)

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