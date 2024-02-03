require("dotenv").config()
const Sequelize = require('sequelize');

var db = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        dialect:"mssql",
        dialectOptions:{
            requestTimeout: 300000
        },
        host:process.env.DB_HOST,
        
    }
);



module.exports = db;