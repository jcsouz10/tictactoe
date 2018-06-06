const express = require('express');
const dao = require('../matchs-dao.js');
const router = express.Router();

router.get('/match', async (req, res) => {
    const response = await dao.getMatchs();
    res.send(
        response
    )
});
  
module.exports = router;

