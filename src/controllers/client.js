'use strict'
let Client=require('../models/client');

const bodyParser = require('body-parser');

module.exports={
getAllClients:(req, res) => {
        var response = {}
        Client.find({}, (err, data) => {
            // Mongo command to fetch all data from collection.
            if(err) {
                response = {"error" : true, "message" : "Error fetching data"};
            } else {
                response = {"error" : false, "message" : data};
            }
            res.json(response);
        })
    },
  

createClient:(req,res,next)=>{
    let db=new Client(req.body);
   
  var response = {};
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
     


},

findClientById:(req,res)=>{

var response={};
Client.findOne({_id: req.params._id}, (err, client) => {
            // Mongo command to fetch all data from collection.
            if(err) {
                response = {"error" : true, "message" : "Error fetching data"};
            } else {
                response = {"error" : false, "message" : client};
            }
            res.json(response);
        })


},

deleteClient:(req,res)=>{

var response={};
    Client.findOneAndUpdate({_id: req.params._id }, req.body,(err,client) =>{
        
       if (err) return res.status(400).json(err);
   
      
             else {
                response = {"error" : false,"message" : "isdeleted is  updated"};
            }
            res.json(response);
        });
}
,
updateClient: (req, res, next) => {
    var response={};
    Client.findOneAndUpdate({ _id: req.params._id }, req.body, function(err,client) {
      if (err) return res.status(400).json(err);
   
      
             else {
                response = {"error" : false,"message" : "Data updated"};
            }
            res.json(response);
        });
  
}
};