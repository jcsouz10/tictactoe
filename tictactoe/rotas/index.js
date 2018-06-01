const express = require ('express');
const router = express.Router();

router.use('/', require('./match'));

module.exports = router;