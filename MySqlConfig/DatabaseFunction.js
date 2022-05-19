const database = require('./Database');

function connectionCheck() {
    return new Promise((resolve,reject) =>{
        database.getConnection(function (error ,connection){
            if(error)
            {
                if(connection) connection.release();
                reject(error);
            }
            else
            {
                resolve('Successfully');
            }
        })
    })
}


function connectionRelease() {
    database.on('release', function (connection) {
        console.log('Connection %d released', connection.threadId)
    })
}

module.exports = {
    connectionCheck : connectionCheck(),
    connectionRelease: connectionRelease()
}