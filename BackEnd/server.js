const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const mongoose = require('mongoose')

const routes = require('./src/routes')

const app = express()

mongoose.connect('mongodb://localhost:27017/FotonBookList', {
  useUnifiedTopology: true,
  useNewUrlParser: true
}, err => console.log(err ?? 'Mongo DB successfully connected!'))

app.use(cors({ origin: '*' }))
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(routes)

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*', 'Origin, X-Requested-With, Content-Type, Accept', 'application/json', 'text/json');

    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    next();
});

app.listen(4000, () => console.log('App listen'))