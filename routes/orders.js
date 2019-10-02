const express = require('express');
const router = express.Router();

const orders = require('./../data/orders');

router.get('/', (req, res, next) => {
    res.status(200).json({
        orders: orders
    });
});


module.exports = router;