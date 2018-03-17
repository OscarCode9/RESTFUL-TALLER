const express = require('express');
const router = express.Router();

const controles = require('../controles');

router.get('/showAllImg', controles.showAllImg);

router.get('/showImgById/:id', controles.showImgById);

router.post('/newImg', controles.newImg);

router.put('/updateById/:id', controles.updateById);

router.delete('/deleteImgById/:id', controles.deleteImgById);

module.exports = router;