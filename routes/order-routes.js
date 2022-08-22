const express = require('express');
const orderController = require('../controllers/order-controller');
const router = express.Router();

router.post('/delete', orderController.deleteOrder);

module.exports = router;