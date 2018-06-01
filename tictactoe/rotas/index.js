const express = require ('express');
const router = express.Router();

router.use('/', require('./names'));

module.exports = router;