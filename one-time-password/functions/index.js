const functions = require('firebase-functions');
const createUser = require('./create_user');

exports.createUser = functions.https.onRequest(createUser);
