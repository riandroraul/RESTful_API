const express = require('express')
const mongoose = require('mongoose');
const router = require('./routes/index');
const bodyParser = require('body-parser');
const app = express()
const port = 3000

mongoose.connect('mongodb://127.0.0.1:27017/perpus', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
// db.once('open', () => {console.log('database connected')})

// menggunakan body-parser
app.use(bodyParser.json())
// app.use(express.json)
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use('/books', router)

// app.use('/books/tambah', router)
// app.put('/books/ubah', router)
// app.delete('/books/hapus', router)

app.listen(port, () => {
  console.log(`app listen at http://localhost:${port}`)
})