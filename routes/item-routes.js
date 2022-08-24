const express = require('express');
const itemController = require('../controllers/item-controller');
const router = express.Router();

router.get('/get', itemController.getItems);

module.exports = router;