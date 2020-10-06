'use strict';

var utils = require('../utils/writer.js');
var InternalCalls = require('../service/InternalCallsService');

module.exports.typeGet_inventoryGET = function typeGet_inventoryGET(
    req,
    res,
    next
) {
    var type = req.swagger.params['type'].value;
    var product_id = req.swagger.params['product_id'].value;
    InternalCalls.typeGet_inventoryGET(type, product_id)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.typeGet_loginGET = function typeGet_loginGET(req, res, next) {
    var type = req.swagger.params['type'].value;

    InternalCalls.typeGet_loginGET(type)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.typeGet_orderGET = function typeGet_orderGET(req, res, next) {
    var type = req.swagger.params['type'].value;
    var order_id = req.swagger.params['order_id'].value;
    InternalCalls.typeGet_orderGET(type, order_id)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.typeGet_ordersGET = function typeGet_ordersGET(req, res, next) {
    var type = req.swagger.params['type'].value;
    InternalCalls.typeGet_ordersGET(type)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.typeGet_productsGET = function typeGet_productsGET(
    req,
    res,
    next
) {
    var type = req.swagger.params['type'].value;
    InternalCalls.typeGet_productsGET(type)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.typePost_orderPOST = function typePost_orderPOST(
    req,
    res,
    next
) {
    var type = req.swagger.params['type'].value;
    var pOSTDATA = req.swagger.params['POSTDATA'].value;
    InternalCalls.typePost_orderPOST(type, pOSTDATA)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};
