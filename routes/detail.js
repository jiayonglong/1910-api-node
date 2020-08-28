/**
 * Created by 贾永龙 on 2020/8/28.
 */
var express = require('express');
var router = express.Router();
var mysql = require('mysql')
var connection = mysql.createConnection({
    host: '192.168.177.99',
    user: 'root',
    password: 'root',
    database: 'shop'
})
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
router.get('/test', function(req, res, next) {
    connection.query('SELECT * FROM shop.p_goods ORDER BY goods_id LIMIT 1', function (error, list, fields) {
        if (error) throw error;
        // console.log('The solution is: ', list);
        res.send(list);
    })
});

module.exports = router;