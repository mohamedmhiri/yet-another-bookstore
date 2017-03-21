'use strict'
const express = require('express')
const router = express.Router()
const categoryController = require('../controllers/category')

router
  .get('/categories', categoryController.getCategories)
  .post('/categories/add', categoryController.addCategory)
  .get('/categories/:_id', categoryController.getCategory)
module.exports = router