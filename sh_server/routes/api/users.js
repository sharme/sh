var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var auth = require('../util/auth.js');
var error = require('../util/error.js');
var sql = require('../db/sql.js');

var connection = mysql.createConnection({
    host: sql.host,
    user: sql.user,
    password: sql.password,
    database: sql.database
});

connection.connect();

router.get('/getUserById', function(req, res, next) {
    if(auth.getSecret(req.param('secret')) == auth.encrypt(auth.authCode)) {
        var sqlQuery = mysql.format(sql.getUserById, req.param('u_id'));
        connection.query(sqlQuery, function (err, rows, fields) {
            if (err) {
                res.send(err);
            } else {
                res.send(rows);
            }
        });
    } else  {
        res.send(error.declined);
    }
});









module.exports = router;


