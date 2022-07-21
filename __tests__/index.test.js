const request = require('supertest');
const BookMockup = require('../models/books.mockup');
const routerTesting = require('../routes/testRoutes');
const mongoose = require('mongoose')
const express = require('express');

const app = express()
app.use(express.json())
app.use(routerTesting)

beforeAll(async () => {
  await mongoose.connect('mongodb://127.0.0.1:27017/testing', {
    useNewUrlParser: true,
    // useUnifiedTopology: true,
  });
  const bookMockup = new BookMockup({
    namaBuku: 'namabuku1',
    penerbit: 'penerbit1',
    pengarang: 'pengarang1'
  })
  return await bookMockup.save();
})

afterAll( async () => {
  await BookMockup.deleteMany();
  return await mongoose.connection.close();
})


describe("GET testing get all books", () => {
  test("Get /books", async () => {
    const result = await request(app).get("/books");

    expect(result.header['content-type']).toEqual("application/json; charset=utf-8");
    expect(result.statusCode).toEqual(200);
  })
  test("ERROR GET testing get all books endpoint wrong", async () => {
    const result = await request(app).get("/"); // jika endpoint salah
    expect(result.header['content-type']).toEqual('text/html; charset=utf-8');
    expect(result.statusCode).toEqual(404);
  })
})

describe('GET:id testing get book by id', () => {
  test("GET /books/id/:id", async () => {
    const book = await BookMockup.find();
    const id = book[0]._id;
    const result = await request(app).get(`/books/id/${id}`);
    expect(result.header['content-type']).toEqual("application/json; charset=utf-8");
    expect(result.statusCode).toEqual(200);
  })
  test("ERROR GET testing error get book by id wrong", async () => {
    const id = 'salah';
    const result = await request(app).get(`/books/id/${id}`);
    expect(result.header['content-type']).toEqual("application/json; charset=utf-8");
    expect(result.statusCode).toEqual(404);
  })

})


describe('POST testing add book', () => {

  test('POST duplikat data buku', async () => {
    const book = await BookMockup.count();
    const result = await request(app).post("/books/tambah").send({
      namaBuku: "namabuku1",
      penerbit: "penerbit1",
      pengarang: "pengarang1"
    })
    const newBook = await BookMockup.count()
    expect(newBook).toEqual(book);
    expect(result.statusCode).toEqual(400);
    expect(result.header['content-type']).toEqual("application/json; charset=utf-8");
    expect('nama buku sudah ada');
  })
  
  test("POST /books/tambah", async () => {
    const dataBeforeAdded = await BookMockup.count();
    const result = await request(app).post("/books/tambah")
    .send({
      namaBuku: "namabuku12",
      penerbit: "penerbit1",
      pengarang: "pengarang1"
    });

    const countBooks = await BookMockup.count();
    expect(countBooks).toBe(dataBeforeAdded + 1);
    expect(result.statusCode).toEqual(201);
    expect(result.header['content-type']).toEqual("application/json; charset=utf-8");
  })

  test('ERROR POST /books/tambah', async () => {
    const result = await request(app).post("/books/tambah");
    expect(result.header['content-type']).toEqual("application/json; charset=utf-8");
    expect(result.statusCode).toEqual(400);
  })
  
})


describe("PUT Testing update Book", () => {

  test("PUT ubah data buku", async () => {
    const book = await BookMockup.find();
    const id = book[0]._id;
    const result = await request(app).put(`/books/ubah/${id}`).send({
      namaBuku: "namabuku123",
      penerbit: "penerbit1",
      pengarang: "pengarang1"
    });
    expect(result.header['content-type']).toEqual('application/json; charset=utf-8');
    expect(result.statusCode).toEqual(200);
  })

  test('PUT duplikat data buku', async () => {
    const book = await BookMockup.find();
    const id = book[0]._id;
    const countBook = await BookMockup.count()
    const result = await request(app).put(`/books/ubah/${id}`).send({
      namaBuku: "namabuku123",
      penerbit: "penerbit1",
      pengarang: "pengarang1"
    })
    const newBook = await BookMockup.count()
    expect(newBook).toEqual(countBook);
    expect(result.statusCode).toEqual(400);
    expect(result.header['content-type']).toEqual("application/json; charset=utf-8");
    expect('nama buku sudah ada');
  })

  test("ERROR PUT /books/ubah/:id", async () => {
    const id = 'salah';
    const result = await request(app).put(`/books/ubah/${id}`);
    expect(result.header['content-type']).toEqual('application/json; charset=utf-8');
    expect(result.statusCode).toEqual(404);
    // expect(message).toEqual("id not found");
  })

})


describe("DELETE test delete book by id", () => {
  test("DELETE /books/hapus/:id", async () => { 
    const book = await BookMockup.find();
    const id = book[0]._id;
    const result = await request(app).delete(`/books/hapus/${id}`);
    expect(result.header['content-type']).toEqual('application/json; charset=utf-8');
    expect(result.statusCode).toEqual(200);
  })

  test("ERROR DELETE /books/hapus/:id", async () => {
    const result = await request(app).delete(`/books/hapus/id`);
    expect(result.header['content-type']).toEqual('application/json; charset=utf-8');
    expect(result.statusCode).toEqual(404);
  })
})




