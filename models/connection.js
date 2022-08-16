const mysql = require ('msql2/promise')
require('dotenv/config');

const {
  MYSQL_HOST,
  PORT,
  MYSQL_USER,
  MYSQL_PASSWORD,
  MYSQL_DATABASE,
} = process.env;

const connection = mysql.createpool({
  host: MYSQL_HOST,
  port: PORT,
  user: MYSQL_USER,
  password: MYSQL_PASSWORD,
  database: MYSQL_DATABASE,
});

module.exports = connection;
