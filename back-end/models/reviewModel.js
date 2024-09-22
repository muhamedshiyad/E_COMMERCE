const mongoose = require("mongoose");

const reviewSchmea = new mongoose.Schema({
    userId:{
        type :mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    productId:{
        type : mongoose.Schema.Types.ObjectId,
        ref:"Product",
        required:true,
    },
    rating:{
        type:Number,
        required: true,
        min:1,
        max :5,
    },
    comment : {
        type: String,
        trim:true,
        maxlength:500,
    },
    createAt:{
        type:Date,
        default:Date.now,
    },
})

const Review = mongoose.model("Review",reviewSchmea);

module.exports = { Review};
