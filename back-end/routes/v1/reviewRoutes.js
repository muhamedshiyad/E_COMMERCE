const express = require("express");
const { addReview, getproductReviews, getAverageRating, deleteReview } = require("../../controllers.js/reviewControllers");
const { userAuth } = require("../../middlewares/userAuth");

const router = express.Router();

router.get("/avgrating/:productId",userAuth,getAverageRating);
router.get("/avgreview/:productId",userAuth,getproductReviews);
router.post("/addreview",userAuth,addReview);
router.put("/delete/:reviewId",userAuth,deleteReview);

module.exports = { reviewRouter: router };