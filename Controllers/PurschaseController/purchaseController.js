const helper = require('../../Helpers/Helper');
const moment = require('moment');
const PurchaseModel  = require('../../Models/PurchaseModels/PurchaseModel')

exports.purchaseBook = async (req,res) =>{
    try {
        const data = req.body;
        const bookId = data.bookId;
        const customerId = data.customerId;
        const date_created = moment.utc().format('YYYY-MM-DD');
        if(!!bookId && !!customerId )
        {
            const getNewPurchase  = await PurchaseModel.createNewPurchase(bookId,customerId,date_created);
            const order_id = (getNewPurchase.insertId);
            const registerDetails = await PurchaseModel.getNewPurchaseDetails(order_id);
            helper.successResponse(res,'Purchased Successfully Thank You for Shopping!',registerDetails);       
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


exports.getBooksPurchasedByCustomer = async (req,res) =>{
    try {
        const data = req.body;
        const customer_id = data.customer_id;
        if(customer_id !='')
        {

            const booksList  = await PurchaseModel.getBooksPurchasedByCustomer(customer_id);
            helper.successResponse(res,'Books Purchased',booksList);       
        }
        else
        {
            helper.ValidationMessage(res,'CustomerID Required');       

        }
    }
    catch(error)
        {
            helper.errorMessage(res, error.message);
        }
}
