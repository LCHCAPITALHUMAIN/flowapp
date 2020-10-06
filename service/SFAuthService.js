'use strict';

const jwt = require('salesforce-jwt-bearer-token-flow');
const jsforce = require('jsforce');

require('dotenv').config();

const { SF_CONSUMER_KEY, SF_USERNAME, SF_LOGIN_URL } = process.env;

let SF_PRIVATE_KEY = process.env.PRIVATE_KEY;
if (!SF_PRIVATE_KEY) {
    SF_PRIVATE_KEY = require('fs').readFileSync('private.pem').toString('utf8');
}

exports.getSalesforceConnection = function () {
    return new Promise(function (resolve, reject) {
        jwt.getToken(
            {
                iss: SF_CONSUMER_KEY,
                sub: SF_USERNAME,
                aud: SF_LOGIN_URL,
                privateKey: SF_PRIVATE_KEY
            },
            (err, tokenResponse) => {
                if (tokenResponse) {
                    let conn = new jsforce.Connection({
                        instanceUrl: tokenResponse.instance_url,
                        accessToken: tokenResponse.access_token
                    });
                    resolve(conn);
                } else {
                    reject('Authentication to Salesforce failed');
                }
            }
        );
    });
};
