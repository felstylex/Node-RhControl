const Sequelize = require('sequelize');
const path = require('path');
require('dotenv').config({path: path.join(__dirname, '../','.env')});

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    dialect: 'mysql',
    host: process.env.DB_HOST,
    port: process.env.PORT,
}, {
    define: {
       freezeTableName: true, 
    }
});
module.exports = sequelize;