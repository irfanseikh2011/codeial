const express = require('express');

const router = express.Router();

const userprofile = require('../controllers/users_controller');

router.get('/profile',userprofile.profile);


router.get('/sign-up',userprofile.signup);

module.exports = router;