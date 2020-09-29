'use strict';


/**
 * External Service to make Creditcard payments
 *
 * pOSTDATA POSTDATA_1 Creates a new employee in DB (optional)
 * returns inline_response_200_5
 **/
exports.shoppingcartService_creditcard_phpPOST = function(pOSTDATA) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Status" : "Transaction Approved",
  "Status Code" : 100,
  "Reason" : "Approved"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

