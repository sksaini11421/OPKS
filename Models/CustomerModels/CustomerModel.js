const db = require('../../MySqlConfig/Database');
const dbFun = require('../../MySqlConfig/DatabaseFunction');

exports.createNewCustomer = (customerName,gender,countryCode,phoneNumber,date_created) => {
    return new Promise((resolve, reject) => {
        queryString = `INSERT INTO customers(customer_name,country_code,gender,phone_number,registered_at) values(?,?,?,?,?)`;
        db.query(queryString, [customerName,countryCode,gender,phoneNumber, date_created], (error, result) => {
            if (error) {
                dbFun.connectionRelease;
                reject(error);
            } else {
                dbFun.connectionRelease;
                resolve(result);
            }
        });
    })
}


exports.getRegisterCustomerDetails = (customer_id) => {
    return new Promise((resolve, reject) => {
        queryString = `SELECT * FROM purchased_books where cust_id = ?`;
        db.query(queryString, [customer_id], (error, result) => {
            if (error) {
                dbFun.connectionRelease;
                reject(error);
            } else {
                dbFun.connectionRelease;
                resolve(result);
            }
        });
    })
}


exports.getAllCustomersDetails = () => {
    return new Promise((resolve, reject) => {
        queryString = `SELECT * FROM customers`;
        db.query(queryString, (error, result) => {
            if (error) {
                dbFun.connectionRelease;
                reject(error);
            } else {
                dbFun.connectionRelease;
                resolve(result);
            }
        });
    })
}


exports.updateCustomerDetails = (customerId,customerName,phoneNumber,date_created) => {
    return new Promise((resolve, reject) => {
        queryString = `update customers set customer_name= ?,updated_at=?, phone_number=? where cust_id = ?`;
        db.query(queryString,[customerName,date_created,phoneNumber,customerId],(error, result) => {
            if (error) {
                dbFun.connectionRelease;
                reject(error);
            } else {
                dbFun.connectionRelease;
                resolve(result);
            }
        });
    })
}


exports.deleteCustomer = (customer_id) => {
    return new Promise((resolve, reject) => {
        queryString = `delete FROM customers where cust_id=?`;
        db.query(queryString,[customer_id], (error, result) => {
            if (error) {
                dbFun.connectionRelease;
                reject(error);
            } else {
                dbFun.connectionRelease;
                resolve(result);
            }
        });
    })
}