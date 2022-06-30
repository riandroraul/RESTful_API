const Book = require('../models/books')

const getAllBooks = async (req, res) => {
  try{
    const books = await Book.find()
    res.json(books)
  } catch(err){
    res.json({
      message: err.message
    })
  }
}

const getBookById = async (req, res) => {
  try{
    const book = await Book.findById(req.params.id)
    res.status(302).json({book, message: 'buku ditemukan'})
  } catch(err){
    res.json({
      // message: err.message,
      message: 'id not found'
    })
  }
}

const addBooks = async (req, res) => {
  const books = new Book({
    namaBuku: req.body.namaBuku,
    penerbit: req.body.penerbit,
    pengarang: req.body.pengarang,
  });
  try{
    const addBook = await books.save()
    res.status(201).json(addBook)
  }catch(err){
    res.status(400).json({message: err.message});
  }
}

const updateBook = async (req, res) => {
  try{
    const updateBook = await Book.updateOne(
      { _id: req.params.id},
      { $set: req.body}
    )
    res.status(200).json(updateBook)
  }catch(err){
    res.status(400).json({message: err.message});
  }
}

const deleteBook = async (req, res) => {
  try{
    const delBook = await Book.deleteOne({_id: req.params.id})
    res.status(200).json(delBook)
  }catch(err){
    res.status(404).json({message: err.message})
  }
}

module.exports = {getAllBooks, addBooks, getBookById, updateBook, deleteBook}