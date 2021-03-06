const Book = require('../models/books')

const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find()
        res.status(200).json(books)
    } catch (err) {
        res.status(404).json({
            message: err.message
        })
    }
}

const getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id)
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

const addBooks = async (req, res) => {
    const books = new Book({
        namaBuku: req.body.namaBuku,
        penerbit: req.body.penerbit,
        pengarang: req.body.pengarang,
    });
    try {
        const duplikat = await Book.findOne({namaBuku: books.namaBuku})
        if(duplikat){
            throw new Error('nama buku sudah ada')
        }
        const addBook = await books.save()
        res.status(201).json({ addBook, message: "berhasil ditambahkan" })
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const updateBook = async(req, res) => {
    try {
        const duplikat = await Book.findOne({namaBuku: req.body.namaBuku})
        
        if(duplikat){
            throw new Error('nama buku sudah ada')
        } 
        // console.log(duplikat)
        const bookUpdated = await Book.updateOne({ _id: req.params.id }, {
            $set: {
                namaBuku: req.body.namaBuku,
                penerbit: req.body.penerbit,
                pengarang: req.body.pengarang
            }
        })
        res.status(200).json(bookUpdated)
    } catch (err) {
        res.status(400).json({message: err.message});
    }
}

// const updateBook = async (req, res) => {
//   try{
//     const bookUpdated = await Book.findByIdAndUpdate(req.params.id, {
//       namaBuku: req.body.namaBuku,
//       penerbit: req.body.penerbit,
//       pengarang: req.body.pengarang
//     })
//     //   {_id: req.params.id},
//     //   {$set: {
//     //       namaBuku: req.body.namaBuku,
//     //       penerbit: req.body.penerbit,
//     //       pengarang: req.body.pengarang,
//     //     }
//     //   }
//     // )
//     res.status(200).json(bookUpdated)
//   }catch(err){
//     res.status(400).json({message: err.message})
//   }
// }

const deleteBook = async(req, res) => {
    try {
        const delBook = await Book.deleteOne({ _id: req.params.id })
        res.status(200).json(delBook)
    } catch (err) {
        // res.status(404).json({message: err.message})
        res.status(404).json({ message: "id not found" })
    }
}

const reqError = (req, res) => {
    res.status(400).json({status: 400, message: 'cannot request with this end point'})
}

// const apiBook = (req, res) => {
//     res.json(books);
// }

module.exports = { getAllBooks, addBooks, getBookById, updateBook, deleteBook, reqError }