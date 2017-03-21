'use strict'
// mongoose's Promise library is deprecated, using es6's:

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
<<<<<<< HEAD
const router = express.Router()
const mongoose=require('mongoose')
=======
// const router = express.Router()
const category = require('./src/models/category')
const homeController = require('./src/controllers/')

>>>>>>> d9488e0b025d4b7f00b80a588589f992e74c565f

mongoose.connect('mongodb://localhost:27017/data')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({'extended': false}))
const book = require('./src/models/book')
const client = require('./src/models/client')

<<<<<<< HEAD
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
=======
// set the routes =============================
app.use(require('./src/routes/index'))
app.use(require('./src/routes/category'))
// app.use(require('./src/routes/index'))

// router.get('/', (req, res) =>
//   res.json({'error': false, 'message': 'Hello World'})
// )
//route() will allow you to use same path for different HTTP operation.
//So if you have same URL but with different HTTP OP such as POST,GET etc
//Then use route() to remove redundant code.

// router.route("/categories")
//     .get( (req,res) => {
//         var response = {}
//         category.find({}, (err,data) => {
//             // Mongo command to fetch all data from collection.
//             if(err) {
//                 response = {"error" : true,"message" : "Error fetching data"};
//             } else {
//                 response = {"error" : false,"message" : data};
//             }
//             res.json(response);
//         })
//     })
//     .post( (req,res) => {
//         let db = new category(req.body);
//         var response = {};
//         // fetch email and password from REST request.
//         // Add strict validation when you use this in Production.
//         // db.name = req.body.name;
//         // Hash the password using SHA1 algorithm.
//         db.save(function(err){
//             // save() will run insert() command of MongoDB.
//             // it will add new data in collection.
//             if(err) {
//                 return res.send (err)
//             } else {
//                 response = {"error" : false,"message" : "Data added"};
//             }
//             res.json(response);
//         });
//     });

// app.use('/', router)
>>>>>>> d9488e0b025d4b7f00b80a588589f992e74c565f
app.listen(3000)
console.log('Express started on port 3000')
module.exports = app;