const express = require('express')
const mongoose = require('mongoose');
const router = require('./routes/index');
const bodyParser = require('body-parser');
const app = express()
const port = 3000
    // const swaggerUi = require('swagger-ui-express')
    // const apiDocumentation = require('./apidocs.json')
    // const swaggerJsDoc = require('swagger-jsdoc')


const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const options = require("./swagger");
const specs = swaggerJsDoc(options);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs))

// server.listen(port, ip,
// 	() => {
// 		console.log(`${service} version ${version} listening on ${ip}:${port}`);
// 	});

// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(apiDocumentation))


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
app.use(router)


// app.use('/books/tambah', router)
// app.put('/books/ubah', router)
// app.delete('/books/hapus', router)

app.listen(port, () => {
    console.log(`app listen at http://localhost:${port}`)
})