const request = require('supertest')
const express = require('express');
const router = require('../routes/index');
const { getAllBooks, getBookById } = require('../controller/booksController');
const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/perpus', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const app = express();

app.use(router)

app.get('/books', getAllBooks);
app.get('/books/id/:id', getBookById)

request(app)
  .get('/books')
  .expect('Content-Type', /json/)
  .expect(200)
  .end((err, res) => {
    if (err) throw err;
  });

describe('GET /books', () => {
    it('GET /books response with status code 200', (done) => {
        request(app)
        .get('/books')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
});

request(app)
  .get('/books/id/:id')
  .expect('Content-Type', /json/)
  .expect(200)
  .end((err, res) => {
    if (err) throw err;
  });

describe('GET /books/id/:id', () => {
    it('GET /books/id/:id get books by id response with status code 200', (done) => {
        request(app)
        .get('/books/id/:id')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
});