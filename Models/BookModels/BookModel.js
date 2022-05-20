const db = require('../../MySqlConfig/Database');
const dbFun = require('../../MySqlConfig/DatabaseFunction');



exports.createNewBook = (book_title,price,seller_id, date_created) => {
    return new Promise((resolve, reject) => {
        queryString = `INSERT INTO books(book_title,price,seller_id,created_date) values(?,?,?,?)`;
        db.query(queryString, [book_title,price,seller_id, date_created], (error, result) => {
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



exports.getRegisterBookDetails = (book_id) => {
    return new Promise((resolve, reject) => {
        queryString = `SELECT * FROM books where book_id = ?`;
        db.query(queryString, [book_id], (error, result) => {
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


exports.getAllBookDetails = () => {
    return new Promise((resolve, reject) => {
        queryString = `SELECT * FROM books`;
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




exports.updateBooksDetails = (book_id,book_title,price, date_created) => {
    return new Promise((resolve, reject) => {
        queryString = `update books set book_title= ?, price=? ,updated_at=? where book_id = ?`;
        db.query(queryString,[book_title,price,date_created,book_id],(error, result) => {
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



exports.deleteBook = (book_id) => {
    return new Promise((resolve, reject) => {
        queryString = `delete FROM books where book_id=?`;
        db.query(queryString,[book_id], (error, result) => {
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

