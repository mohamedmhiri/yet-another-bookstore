'use strict'
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const router = express.Router()
const mongoose=require('mongoose')

mongoose.connect('mongodb://localhost:27017/data')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({'extended': false}))
const book = require('./src/models/book')
const client = require('./src/models/client')

/*app.get('/', (req, res) =>
  res.json({'error': false, 'message': 'Hello World'})
)*/

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({'extended': false}))
app.use(require('./src/routes/books'))
app.use(require('./src/routes/clients'))
/*var Book=require('./src/models/book');
app.get('/Book',function(req,res,next){
// get all events   
  Book.find((err, Book) => {
    if (err) {
      res.status(404);
      res.send('Books not found!');
    }

    res.json(Book);
    });
  });
*/
app.listen(3000)
console.log('Express started on port 3000')
module.exports = app;