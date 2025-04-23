const express = require('express')
const router = express.Router()
const bookController = require('../controllers/bookController')

router.get('/', bookController.getAllBooks)
router.get('/popular', bookController.getPopularBooks)
router.get('/genre/:genre', bookController.getBooksByGenre)

module.exports = router
