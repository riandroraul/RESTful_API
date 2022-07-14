const request = require('supertest');
const {app, server} = require('../app');
const Book = require('../models/books');


// const { connectDB, disconnectDB } = require('./db');
// const request = supertest(app)

// describe('API test', () => {
//   beforeAll(() => {
//     connectDB();
//   });

//   afterAll(() => {
//     disconnectDB();
//     server.close();
//   });

// describe('POST /books/tambah', () => {
//   it('example request using a mocked database instance', async () => {
//       const res = await request.post('/books/tambah', {
//         namaBuku: "namabuku1",
//         penerbit: "penerbit1",
//         pengarang: "pengarang1"
//       });

//       expect(res.status).toBe(201);
//     });
//   });
// });
































describe("testing RESTful API book with jest and supertest", () => {
  test("GET get all books", (done) => {
     request(app).get("/books")
      .expect("Content-Type", /json/)
      .expect(200)
      .expect( (res) => {
        res.body.namaBuku = 'namabuku1',
        res.body.penerbit = 'penerbit1',
        res.body.pengarang = 'pengarang1'
      })
      .end( (err, res) => {
        if(err) throw done(err);
        return done();
      })
  });
});

describe("testing RESTful API book with jest and supertest", () => {
  test("GET get book by id", (done) => {
    request(app)
      .get("/books/id/:id")
      .expect("Content-Type", /json/)
      .expect(200)
      .expect( (res) => {
        res.body.namaBuku = 'namabuku1',
        res.body.penerbit = 'penerbit1',
        res.body.pengarang = 'pengarang1'
      })
      .end( (err, res) => {
        if(err) throw done(err);
        return done();
      })
  });
});

describe("testing RESTful API book with jest and supertest", () => {
  test("POST add book to store", (done) => {
    request(app)
      .post("/books/tambah")
      .expect("Content-Type", /json/)
      .send({
        namaBuku: "namabuku1",
        penerbit: "penerbit1",
        pengarang: "pengarang1"
      })
      .expect(201)
      .expect( (res) => {
          res.body.namaBuku = String,
          res.body.penerbit = String,
          res.body.pengarang = String,
          res.body._id = String
        })
        .end( (err, res) => {
          if(err) return done(err);
          return done()
      })
  });
});

let bookId = '62cd189f14dddf64208731bd'

describe("testing RESTful API book with jest and supertest", () => {
  // Hidden for simplicity
  test("PUT update book data", (done) => {
    request(app)
      request(app)
      .put(`/books/ubah/${bookId}`)
      .expect("Content-Type", /json/)
      .send({
        namaBuku: "namabuku1",
        penerbit: "penerbit1",
        pengarang: "pengarang1"
      })
      .expect(200)
      .expect((res) => {
        res.body.namaBuku = 'namabuku1',
        res.body.penerbit = 'penerbit1',
        res.body.pengarang = 'pengarang1',
        res.body._id = 'jlkjkjdas9897887sdfsdf'
      })
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });
});

describe('testing RESTful API book with jest and supertest', () => {
  test("DELETE delete book by id", (done) => {
    request(app)
    .delete(`/books/hapus/${bookId}`)
    .expect("Content-Type", /json/)
    .expect(200)
    .expect( (res) => {
      res.body.namaBuku = 'namabuku1',
      res.body.penerbit = 'penerbit1',
      res.body.pengarang = 'pengarang1',
      res.body._id = 'jlkjkjdas9897887sdfsdf'
    })
    .end( (err, res) => {
      if(err) return done(err)
      return done()
    })
  })
})








