const Sequelize = require('sequelize');

require('dotenv').config();

// create connection to our db
const sequelize = 'mysql://fof0k5khp8gxmc49:hjkmeb7ektp1vanv@m7az7525jg6ygibs.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/vlyhkpn2pep4faxv' ?
    new Sequelize('mysql://fof0k5khp8gxmc49:hjkmeb7ektp1vanv@m7az7525jg6ygibs.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/vlyhkpn2pep4faxv') :
    new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    });

module.exports = sequelize;