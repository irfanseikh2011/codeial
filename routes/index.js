const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller');
const userController = require('../controllers/users_controller');


console.log('router loaded');


router.get('/', homeController.home);
router.use('/users', require('./users'));
router.get('/*',userController.error404);


// for any further routes, access from here
// router.use('/routerName', require('./routerfile));


module.exports = router;