const express = require('express');
const router = express.Router();

const bookController = require('../Controllers/BooksController/BookController');

router.get('/',bookController.getDefaultMessage)
router.post('/create-new-book',bookController.createNewBook)
router.get('/get-all-books',bookController.getAllBooksDetails)
router.post('/update-book-details',bookController.updateBooksDetails)
router.post('/delete-book',bookController.deleteBook)








module.exports = router;