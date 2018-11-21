'use strict'
const mysql = require('mysql');
const config_DB = JSON.parse(process.env.database);
const connection = mysql.createConnection({
  host: config_DB.host,
  user: config_DB.user,
  password: config_DB.password,
  database: config_DB.database
});

module.exports.query = (query) => {
  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (error) {
        console.log('Original MySQL error: ', error)
        reject(error);
      }
      resolve(results);
    })
  })
}