const express = require('express');
const itemController = require('../controllers/item-controller');
const router = express.Router();

router.post('/delete', itemController.getItems);

module.exports = router;