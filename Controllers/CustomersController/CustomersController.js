const helper = require('../../Helpers/Helper');
const moment = require('moment');
const CustomerModel = require('../../Models/CustomerModels/CustomerModel');



exports.createNewCustomer = async (req,res) =>{
    try {
        const data = req.body;
        const customerName = data.customerName;
        const gender = data.gender;
        const countryCode = data.countryCode;
        const phoneNumber = data.phoneNumber;
        const date_created = moment.utc().format('YYYY-MM-DD');
        if(!!customerName && !!gender && !!countryCode && !!phoneNumber)
        {
            const getRegisterCustomerDetails  = await CustomerModel.createNewCustomer(customerName,gender,countryCode,phoneNumber,date_created);
            const customer_id = (getRegisterCustomerDetails.insertId);
            const registerDetails = await CustomerModel.getRegisterCustomerDetails(customer_id);
            helper.successResponse(res,'Customer Registered Successfully!',registerDetails);       
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




exports.getAllCustomersDetails = async (req,res) =>{
    try {
            const CustomerDetails = await CustomerModel.getAllCustomersDetails();
            helper.successResponse(res,'Data Fetched Suceeded!',CustomerDetails);       
        }
    catch(error)
        {
            helper.errorMessage(res, error.message);
        }
}



exports.updateCustomerDetails = async (req,res) =>{
    try {
        const data = req.body;
        const customerId = data.customerId;
        const customerName = data.customerName;
        const phoneNumber = data.phoneNumber;
        const date_created = moment.utc().format('YYYY-MM-DD');
        if(!!customerName && !!customerId && !!phoneNumber)
        {

            const updateCustomerDetails  = await CustomerModel.updateCustomerDetails(customerId,customerName,phoneNumber,date_created);
            const updatedDetails = await CustomerModel.getRegisterCustomerDetails(customerId);
            helper.successResponse(res,'Customer Details updated Successfully!',updatedDetails);       
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


exports.deleteCustomer = async (req,res) =>{
    try {
        const data = req.body;
        const customer_id = data.customer_id;
        if(customer_id !='')
        {

            const deleteCustomer  = await CustomerModel.deleteCustomer(customer_id);
            helper.ValidationMessage(res,'Customer Deleted Successfully!');       
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
