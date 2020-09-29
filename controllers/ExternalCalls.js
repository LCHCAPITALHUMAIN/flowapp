'use strict';

var utils = require('../utils/writer.js');
var ExternalCalls = require('../service/ExternalCallsService');

module.exports.shoppingcartService_creditcard_phpPOST = function shoppingcartService_creditcard_phpPOST (req, res, next) {
  var pOSTDATA = req.swagger.params['POSTDATA'].value;
  ExternalCalls.shoppingcartService_creditcard_phpPOST(pOSTDATA)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
