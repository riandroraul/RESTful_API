const BookMockup = require('../models/books.mockup')

const getAllBooks = async (req, res) => {
    try {
        const books = await BookMockup.find()
        res.status(200).json(books)
    } catch (err) {
        res.status(404).json({
        message: err.message
        })
    }
}

const getBookById = async (req, res) => {
    try {
        const book = await BookMockup.findById(req.params.id)
        res.status(200).json({
            book,
            message: 'buku ditemukan'
        })
    } catch (err) {
        res.status(404).json({
            // message: err.message,
            message: 'id not found',
        })
    }
}

const addBooks = async(req, res) => {
    const books = new BookMockup({
        namaBuku: req.body.namaBuku,
        penerbit: req.body.penerbit,
        pengarang: req.body.pengarang,
    });
    try {
        const addBook = await books.save()
        res.status(201).json({ addBook, message: "berhasil ditambahkan" })
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const updateBook = async(req, res) => {
    try {
        const bookUpdated = await BookMockup.updateOne({ _id: req.params.id }, {
            $set: {
                namaBuku: req.body.namaBuku,
                penerbit: req.body.penerbit,
                pengarang: req.body.pengarang
            }
        })
        res.status(200).json(bookUpdated)
    } catch (err) {
        // res.status(400).json({message: err.message});
        res.status(404).json({ message: 'id not found' });
    }
}


const deleteBook = async(req, res) => {
    try {
        const delBook = await BookMockup.deleteOne({ _id: req.params.id })
        res.status(200).json(delBook)
    } catch (err) {
        // res.status(404).json({message: err.message})
        res.status(404).json({ message: "id not found" })
    }
}

// const apiBook = (req, res) => {
//     res.json(books);
// }

module.exports = { getAllBooks, addBooks, getBookById, updateBook, deleteBook }