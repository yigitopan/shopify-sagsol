const express = require('express');
const itemController = require('../controllers/item-controller');
const router = express.Router();

router.get('/getcategories', itemController.getCategories);

router.get('/getproducers', itemController.getProducers);

router.get('/getproducts', itemController.getProducts);

router.get('/getprices', itemController.getPrices);

router.get('/getgroups', itemController.getGroups);

router.get('/getoes', itemController.getOEs);

router.get('/getimages', itemController.getImages);

module.exports = router;