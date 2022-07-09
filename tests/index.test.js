const express = require('express');
const router = require('../routes');
const supertest = require('supertest');

const { app } = require('../app')

describe('books', () => {
    it('returns status code 200 if success', async() => {
        const res = await supertest(app).post('/books/tambah').send({
            namaBuku: "nama buku 1",
            penerbit: "penerbit 1",
            pengarang: "pengarang 1",
        });
        expect(res.statusCode).toEqual(200);
    });
});