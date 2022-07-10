const express = require('express');
const router = require('../routes');
const supertest = require('supertest');
const app = express()

app.use(express.json())

app.use('/api/books', router);

describe('integration test for books api', async() => {
    it('GET /api/books - success - get all books', () => {
        await supertest(app).get('/api/books')

        expect(body).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    _id: expect.any(String),
                    namaBuku: expect.any(String),
                    penerbit: expect.any(String),
                    pengarang: expect.any(String),
                    __v: expect.any(Number)
                })
            ])
        );
        expect(statusCode).toBe(200)
    })
})