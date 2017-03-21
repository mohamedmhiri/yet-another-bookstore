'use strict'
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
// const mongoOp = require('./models/mongo')
const router = express.Router()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended' : false}))

