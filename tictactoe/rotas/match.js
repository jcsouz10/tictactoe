const express = require('express');
const dao = require('../matchs-dao.js');
const router = express.Router();

router.get('/match', async (req, res) => {
  console.log(req.body);

    const response = await dao.getMatchs();
    res.send(
        response
    )
});
  
module.exports = router;

// router.post('/match', async (req, res) => {
//   console.log(req.body);

//     const response = await dao.getMatchs();
//     res.send(
//        req.body
//     )
// });
  
// module.exports = router;