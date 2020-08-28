/**
 * Created by 贾永龙 on 2020/8/27.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
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
    //var list = [
    //    {goods_id:12345,goods_name:"mi",goods_price:123},
    //    {goods_id:1234,goods_name:"mi",goods_price:3},
    //    {goods_id:123,goods_name:"mi",goods_price:1},
    //
    //];
    connection.query('SELECT * FROM shop.p_goods ORDER BY goods_sn DESC LIMIT 9', function (error, list, fields) {
        if (error) throw error;
        // console.log('The solution is: ', list);
        res.send(list);
    })
});

module.exports = router;