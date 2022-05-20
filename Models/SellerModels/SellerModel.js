const db = require('../../MySqlConfig/Database');
const dbFun = require('../../MySqlConfig/DatabaseFunction');

exports.createNewSeller = (seller, date_created) => {
    return new Promise((resolve, reject) => {
        queryString = `INSERT INTO sellers(seller,registered_at) values(?,?)`;
        db.query(queryString, [seller, date_created], (error, result) => {
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


exports.getRegisterSellerDetails = (seller_id) => {
    return new Promise((resolve, reject) => {
        queryString = `SELECT * FROM sellers where seller_id = ?`;
        db.query(queryString, [seller_id], (error, result) => {
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



exports.getAllSellerDetails = () => {
    return new Promise((resolve, reject) => {
        queryString = `SELECT * FROM sellers`;
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


exports.updateSellersDetails = (seller_id,seller, date_created) => {
    return new Promise((resolve, reject) => {
        queryString = `update sellers set seller= ?,updated_at=? where seller_id = ?`;
        db.query(queryString,[seller,date_created,seller_id],(error, result) => {
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


exports.deleteSeller = (seller_id) => {
    return new Promise((resolve, reject) => {
        queryString = `delete FROM sellers where seller_id=?`;
        db.query(queryString,[seller_id], (error, result) => {
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


exports.getBooksSoldBySeller = (seller_id) => {
    return new Promise((resolve, reject) => {
        queryString = `SELECT books.book_id,book_title FROM purchased_books left join books on books.book_id = purchased_books.book_id 
        left join sellers on books.seller_id = sellers.seller_id
        where books.seller_id = ?`;
        db.query(queryString, [seller_id], (error, result) => {
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
