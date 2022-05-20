const helper = require('../../Helpers/Helper');
const moment = require('moment');
const SellerModel = require('../../Models/SellerModels/SellerModel')


exports.createNewSeller = async (req,res) =>{
    try {
        const data = req.body;
        const seller = data.seller;
        const date_created = moment.utc().format('YYYY-MM-DD');
        if(seller !='')
        {

            const registerSeller  = await SellerModel.createNewSeller(seller,date_created);
            const seller_id = (registerSeller.insertId);
            const registerDetails = await SellerModel.getRegisterSellerDetails(seller_id);
            helper.successResponse(res,'Seller Registered Successfully!',registerDetails);       
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



exports.getAllSellersDetails = async (req,res) =>{
    try {
            const sellersDetails = await SellerModel.getAllSellerDetails();
            helper.successResponse(res,'Data Fetched Suceeded!',sellersDetails);       
        }
    catch(error)
        {
            helper.errorMessage(res, error.message);
        }
}


exports.updateSellersDetails = async (req,res) =>{
    try {
        const data = req.body;
        const seller_id = data.seller_id;
        const seller = data.seller;
        const date_created = moment.utc().format('YYYY-MM-DD');
        if(seller_id && seller !='')
        {

            const updateBooksDetails  = await SellerModel.updateSellersDetails(seller_id,seller,date_created);
            const updatedDetails = await SellerModel.getRegisterSellerDetails(seller_id);
            helper.successResponse(res,'Seller Details updated Successfully!',updatedDetails);       
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


exports.deleteSeller = async (req,res) =>{
    try {
        const data = req.body;
        const seller_id = data.seller_id;
        if(seller_id !='')
        {

            const deleteSeller  = await SellerModel.deleteSeller(seller_id);
            helper.ValidationMessage(res,'Seller Deleted Successfully!');       
        }
        else
        {
            helper.ValidationMessage(res,'SellerID Required');       

        }
    }
    catch(error)
        {
            helper.errorMessage(res, error.message);
        }
}



exports.getBooksSoldBySeller = async (req,res) =>{
    try {
        const data = req.body;
        const seller_id = data.seller_id;
        if(seller_id !='')
        {

            const booksList  = await SellerModel.getBooksSoldBySeller(seller_id);
            helper.successResponse(res,'Books Solded',booksList);       
        }
        else
        {
            helper.ValidationMessage(res,'SellerID Required');       

        }
    }
    catch(error)
        {
            helper.errorMessage(res, error.message);
        }
}
