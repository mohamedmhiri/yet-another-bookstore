'use strict'
const mongoose = require('mongoose')
const validator = require('validator')
const Schema = mongoose.Schema

var clientSchema = Schema({
  _id: {
    type: Number,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  password: String,
  email: {
    type: String,
    required: true
  },
  tel: {
    type: String
  },
  isDeleted: {
    type: Number,
    default: 0,
    min: 0,
    max: 1
  },
  commands: [{
    type: Number,
    ref: 'Command'
  }]

})

var Client = mongoose.model('Client', clientSchema)

Client.schema.path('email').validate(function (email) {
  return validator.isEmail(email)
})

Client.schema.path('password').validate(function (password) {
  return validator.isLength(password, 6)
})
Client.schema.path('tel').validate(function (tel) {
  return validator.isLength(tel, 8)
})
module.exports = Client
