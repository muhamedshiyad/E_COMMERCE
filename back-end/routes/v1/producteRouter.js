const express = require('express');
const { createproduct, updateproduct, deleteproduct, getProduct } = require('../../controllers.js/productcontroller');
const { upload } = require('../../middlewares/multer');
const { adminAuth } = require('../../middlewares/adminAuth');
const { userAuth } = require('../../middlewares/userAuth');

const router =express.Router();

router.get("/product-list",getProduct);
router.post('/create',adminAuth,upload.single("image"),createproduct)
router.put('/update/:productId',adminAuth,upload.single("image"), updateproduct);
router.delete('/delete:productId',adminAuth,deleteproduct);

module.exports  = {productRouter:router};
