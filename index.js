'use strict'
// mongoose's Promise library is deprecated, using es6's:

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const router = express.Router()
const category = require('./src/models/category')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({'extended': false}))

router.get('/', (req, res) =>
  res.json({'error': false, 'message': 'Hello World'})
)
//route() will allow you to use same path for different HTTP operation.
//So if you have same URL but with different HTTP OP such as POST,GET etc
//Then use route() to remove redundant code.

router.route("/categories")
    .get( (req,res) => {
        var response = {}
        category.find({}, (err,data) => {
            // Mongo command to fetch all data from collection.
            if(err) {
                response = {"error" : true,"message" : "Error fetching data"};
            } else {
                response = {"error" : false,"message" : data};
            }
            res.json(response);
        })
    })
    .post( (req,res) => {
        let db = new category(req.body);
        var response = {};
        // fetch email and password from REST request.
        // Add strict validation when you use this in Production.
        // db.name = req.body.name;
        // Hash the password using SHA1 algorithm.
        db.save(function(err){
            // save() will run insert() command of MongoDB.
            // it will add new data in collection.
            if(err) {
                return res.send (err)
            } else {
                response = {"error" : false,"message" : "Data added"};
            }
            res.json(response);
        });
    });

app.use('/', router)
app.listen(3000)
console.log('Express started on port 3000')
module.exports = app