'use strict';


/**
 * Login to user account
 *
 * type String json or xml
 * returns List
 **/
exports.typeGet_loginGET = function(type) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "address" : "Bangalore, India",
  "phone" : 9482517924,
  "name" : "Sanketh",
  "last_name" : "Shanbhag",
  "id" : 1,
  "email" : "sanketh.shanbhag@smartbear.com"
}, {
  "address" : "Bangalore, India",
  "phone" : 9482517924,
  "name" : "Sanketh",
  "last_name" : "Shanbhag",
  "id" : 1,
  "email" : "sanketh.shanbhag@smartbear.com"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get order details
 *
 * type String json or xml
 * order_id Integer Order Id
 * returns List
 **/
exports.typeGet_orderGET = function(type,order_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "quantity" : 1,
  "total_price" : 999.0,
  "price" : 1.0,
  "name" : "Iphone",
  "id" : 1,
  "customer_id" : 1,
  "order_id" : 1,
  "paymenttype" : "card",
  "status" : 0
}, {
  "quantity" : 1,
  "total_price" : 999.0,
  "price" : 1.0,
  "name" : "Iphone",
  "id" : 1,
  "customer_id" : 1,
  "order_id" : 1,
  "paymenttype" : "card",
  "status" : 0
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get list of all orders for the user
 *
 * type String json or xml
 * returns List
 **/
exports.typeGet_ordersGET = function(type) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "image" : "iphone.jpeg",
  "quantity" : 1,
  "total_price" : 999.0,
  "price" : 1.0,
  "id" : 1,
  "customer_id" : 1,
  "order_id" : 1,
  "paymenttype" : "card",
  "status" : 0
}, {
  "image" : "iphone.jpeg",
  "quantity" : 1,
  "total_price" : 999.0,
  "price" : 1.0,
  "id" : 1,
  "customer_id" : 1,
  "order_id" : 1,
  "paymenttype" : "card",
  "status" : 0
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get list of all products
 *
 * type String json or xml
 * returns List
 **/
exports.typeGet_productsGET = function(type) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "image" : "iphone.jpg",
  "price" : 999.0,
  "created" : "2018-05-05 00:00:00",
  "name" : "iPhone",
  "description" : "This is an rare iphone",
  "modified" : "2018-05-05 00:00:00",
  "id" : 1,
  "status" : "1 or 0"
}, {
  "image" : "iphone.jpg",
  "price" : 999.0,
  "created" : "2018-05-05 00:00:00",
  "name" : "iPhone",
  "description" : "This is an rare iphone",
  "modified" : "2018-05-05 00:00:00",
  "id" : 1,
  "status" : "1 or 0"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get list of all orders for the user
 *
 * type String json or xml
 * pOSTDATA List Creates a new employee in DB (optional)
 * returns List
 **/
exports.typePost_orderPOST = function(type,pOSTDATA) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "Item Total Price" : 1998.0,
  "Order Item ID" : 643,
  "Order ID" : 298,
  "Total Order Price" : 3996.0
}, {
  "Item Total Price" : 1998.0,
  "Order Item ID" : 643,
  "Order ID" : 298,
  "Total Order Price" : 3996.0
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

