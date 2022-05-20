const db = require('../../MySqlConfig/Database');
const dbFun = require('../../MySqlConfig/DatabaseFunction');

exports.createNewPurchase = (bookId,customerId,date_created) => {
    return new Promise((resolve, reject) => {
        queryString = `INSERT INTO purchased_books(book_id,customer_id,order_placed_at) values(?,?,?)`;
        db.query(queryString, [bookId,customerId,date_created], (error, result) => {
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



exports.getBooksPurchasedByCustomer = (customer_id) => {
    return new Promise((resolve, reject) => {
        queryString = `SELECT book_title,order_placed_at,price,books.book_id,order_id FROM purchased_books inner join books on books.book_id = purchased_books.book_id where customer_id = ?`;
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
