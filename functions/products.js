'use strict';
const responseMsg = require('../libs/responses');
const mysql =require('../libs/asyncMySQL');
const queries =require('../libs/queries');

module.exports.getProducts = async (event, context) => {
    try {
        let result = await mysql.query(queries.getProducts);
        return responseMsg.successMessage(result);
      } catch (error) {
        return responseMsg.errorMessage(responseMsg.StatusCode.Internal_Server_Error, error);
      }
  
  };