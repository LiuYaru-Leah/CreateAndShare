var express = require('express');
var router = express.Router();
var axios = require('axios')
router.get("/test", (req, res) => {
    res.json({
        code: 200,
        msg: 'Api test interface',
        result: 'successful'
    })
})