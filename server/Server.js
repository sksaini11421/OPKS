const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

const cors = require('cors');
app.use(cors());

const routes = require('../Routes/Router');
const dbConfig = require('../MySqlConfig/DatabaseFunction');

function initialization() {
    setupBodyParser();
    setUpDatabase();
    setUpRoutes();
    setUpError404Handler();
    setUpErrorHandler();
}

initialization();

function setupBodyParser() {
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
}


function setUpDatabase() {
    dbConfig.connectionCheck.then((data) =>{
        console.log(`Database connected `);
    })
    .catch((error)=>{
        console.log(error);
    })
}

function setUpRoutes() {
    app.use('/v1', routes);
}

function setUpError404Handler() {
    app.use((req, res) => {
        res.status(404).json({
            message: 'NOT FOUND',
            status: 404,
        });
    });
}


function setUpErrorHandler() {
    app.use((error, req,res , next) =>{
        res.status(req.errorStatus || 500).json({
            message : error.message || "Something Went Wrong",
            status: req.errorStatus || 500
        });
    });
}

module.exports = app;