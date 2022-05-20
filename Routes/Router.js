const express = require('express');
const router = express.Router();

const bookController = require('../Controllers/BooksController/BookController');
const sellerController = require('../Controllers/SellersController/SellersController');
const customerController = require('../Controllers/CustomersController/CustomersController');
const purchaseController = require('../Controllers/PurschaseController/purchaseController')

router.get('/',bookController.getDefaultMessage)
router.post('/create-new-book',bookController.createNewBook)
router.get('/get-all-books',bookController.getAllBooksDetails)
router.put('/update-book-details',bookController.updateBooksDetails)
router.delete('/delete-book',bookController.deleteBook)
router.post('/create-new-seller',sellerController.createNewSeller)
router.get('/get-all-seller',sellerController.getAllSellersDetails)
router.put('/update-seller-details',sellerController.updateSellersDetails)
router.delete('/delete-seller',sellerController.deleteSeller)
router.post('/create-new-customer',customerController.createNewCustomer)
router.get('/get-all-customers',customerController.getAllCustomersDetails)
router.put('/update-customer-details',customerController.updateCustomerDetails)
router.delete('/delete-customer',customerController.deleteCustomer)

router.post('/purchase-book',purchaseController.purchaseBook)
router.get('/book-purchase-by-customer',purchaseController.getBooksPurchasedByCustomer)
router.get('/book-sold-by-seller',sellerController.getBooksSoldBySeller)




module.exports = router;