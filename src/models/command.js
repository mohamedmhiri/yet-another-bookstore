'use strict'
const mongoose = require('mongoose')
const validator = require('validator')
const Schema = mongoose.Schema

const commandSchema = Schema({
  _id: {
    type: Number,
    required: true
  },
  isDeleted: {
    type: Number,
    default: 0,
    min: 0,
    max: 1
  },
  books: [{
    type: Number,
    ref: 'Book'
  }],
  client: [{
    type: Number,
    ref: 'Client'
  }]
})
const Command = mongoose.model('Command', commandSchema)
module.exports = Command
