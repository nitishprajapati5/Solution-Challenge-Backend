const express = require('express')
const router = express.Router();

router.get('/',(req,res,next) =>{
    res.status(200).json({
        Message:"Handling GET Requests to /Products"
    });
});

module.exports = router;

