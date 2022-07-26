const { Router } = require('express');
const reverseText = require('../controllers/text');



const router = Router();



router.get("/iecho", reverseText)

module.exports = router;