const helper = require('../../Helpers/Helper')
const moment = require('moment');
const BookModel = require('../../Models/BookModels/BookModel')

exports.getDefaultMessage = async (req, res) => {
    try {
        helper.ValidationMessage(res , 'Welcome to my API' )
    }
    catch (error) {
        helper.errorMessage(res, error.message)
    }
}



exports.createNewBook = async (req,res) =>{
    try {
        const data = req.body;
        const title = data.book_title;
        const price = data.price;
        const seller_id = data.seller_id;
        const date_created = moment.utc().format('YYYY-MM-DD');
        if(title && price !='')
        {

            const registerBook  = await BookModel.createNewBook(title,price,seller_id,date_created);
            const book_id = (registerBook.insertId);
            const registerDetails = await BookModel.getRegisterBookDetails(book_id);
            helper.successResponse(res,'Book Registered Successfully!',registerDetails);       
        }
        else
        {
            helper.ValidationMessage(res,'Inputs are Required');       

        }
    }
    catch(error)
        {
            helper.errorMessage(res, error.message);
        }
}


exports.getAllBooksDetails = async (req,res) =>{
    try {
            const booksDetails = await BookModel.getAllBookDetails();
            helper.successResponse(res,'Data Fetched Suceeded!',booksDetails);       
        }
    catch(error)
        {
            helper.errorMessage(res, error.message);
        }
}


exports.updateBooksDetails = async (req,res) =>{
    try {
        const data = req.body;
        const book_id = data.book_id;
        const title = data.book_title;
        const price = data.price;
        const date_created = moment.utc().format('YYYY-MM-DD');
        if(title && price !='')
        {

            const updateBooksDetails  = await BookModel.updateBooksDetails(book_id,title,price,date_created);
            const updatedDetails = await BookModel.getRegisterBookDetails(book_id);
            console.log(book_id);
            helper.successResponse(res,'Book Details updated Successfully!',updatedDetails);       
        }
        else
        {
            helper.ValidationMessage(res,'Inputs are Required');       

        }
    }
    catch(error)
        {
            helper.errorMessage(res, error.message);
        }
}


exports.deleteBook = async (req,res) =>{
    try {
        const data = req.body;
        const book_id = data.book_id;
        if(book_id !='')
        {

            const deleteBook  = await BookModel.deleteBook(book_id);
            helper.ValidationMessage(res,'Book Deleted Successfully!');       
        }
        else
        {
            helper.ValidationMessage(res,'BookID Required');       

        }
    }
    catch(error)
        {
            helper.errorMessage(res, error.message);
        }
}
