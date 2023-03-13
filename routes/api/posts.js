const express = require('express');
const router = express.Router();

router.post('/', postsCtrl.create);


module.exports = router;