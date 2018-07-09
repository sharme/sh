var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'fm@youtumi',
    database: '54taotao'
});

connection.connect();

router.get('/getUsers', function(req, res) {

    if(req.param('secret') == auth.encrypt('qwertyuiop')) {
        connection.query('select * from jk_users', function (err, rows, fields) {
            if (err) {
                res.send(err);
            } else {
                console.log('Username is: ' + rows[0].u_name);
                // connection.end();
                res.send(rows);
            }
        });
    }
});




module.exports = router;


