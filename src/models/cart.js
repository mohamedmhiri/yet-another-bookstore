'use strict'
const mongoose = require('mongoose')
const validator = require('validator')
const Schema = mongoose.Schema

const cartSchema = Schema({

  _id: {
    type: Number,
    required: true
    
  },
  date: {
    type: Date,
    default: Date.now
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
  }]

})
const Cart = mongoose.model('Cart', cartSchema)
module.exports = Cart
