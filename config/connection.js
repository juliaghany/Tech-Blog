// referenced Module 14 Activity 15 config -> connection.js

// set up connection to MySQL database using sequelize
// import dotenv library to load environment variables from .env file 

const sequelize = require('sequelize');
require('dotenv').config();

if (process.env.JAWSDB_URL) {
    sequelize = new sequelize(process.env.JAWSDB_URL);
} else {
    sequelize = new sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PW,
        {
            host: 'localhost',
            dialect: 'mysql',
            port: 3306,
        },
    );
}



module.exports = sequelize;