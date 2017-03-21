
'use strict'
const express = require('express')
const router = express.Router()
const clients=require('../controllers/client')


router.get('/clients',clients.getAllClients)
.get('/clients/:_id',clients.findClientById)
.post('/clients',clients.createClient)
.put('/clients/:_id/delete',clients.deleteClient)
.put('/clients/:_id/update',clients.updateClient);
module.exports=router;