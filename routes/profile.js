const express = require('express');

const router = express.Router();

const userprofile = require('../controllers/profile_controller');

router.get('/profile',userprofile.profile);

module.exports = router;