const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/api/posts')

router.get('/', postsCtrl.index)
router.post('/', postsCtrl.create)
router.put('/:id', postsCtrl.update);
router.delete('/:id', postsCtrl.deletePost);


module.exports = router;