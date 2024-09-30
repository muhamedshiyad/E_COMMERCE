const { cloudinaryInstance } = require("../config/cloudinary Config");
const { Product } = require("../models/productModel");
const producteRouter = require("../routes/v1/producteRouter");
const { handleImageUpload } = require("../utils/imageupload");

const createproduct = async (req, res, next) => {
    try {
        console.log("create product route hitted");
        console.log(req.file,"====== image on controller");

        const { title, description, duration, price, mentor } = req.body;
        let imageUrl;

        if (!title || !description || !duration || !price) {
            return res.status(400).json({ message: "all fields required" });
        }

        const isProductExist = await Product.findOne({ title });

        if (isProductExist) {
            return res.status(400).json({ success: false, message: "product already exist" });
        }

        if (req.file) {
        const uploadResult = await cloudinaryInstance.uploader.upload(req.file.path);
        imageUrl=uploadResult.url
        console.log(uploadResult,"=====upload result");
        }

       
        const newProduct = new Product({ title, description, duration, image: imageUrl, price, mentor });
        await newProduct.save();

        res.status(201).json({ success: true, message: "product created successfully" });
    } catch (error) {
        next(error);
    }
};
const updateproduct = async (req, res, next) => {
    try {
        const { productId } = req.params;

        const { title, description, duration, price, mentor } = req.body;
        let imageUrl;

        const isProductExist = await Product.findOne({ _id: productId });

        if (!isProductExist) {
            return res.status(400).json({ success: false, message: "product does not exist" });
        }

        if (req.file) {
            imageUrl = await handleImageUpload(req.file.path);
        }

        const updatedProduct = await Product.findOneAndUpdate(
            { _id: productId },
            { title, description, duration, price, mentor, image : imageUrl },
            { new: true }
        );

        res.status(200).json({ success: true, message: "course updated successfully", data: updatedProduct });
    } catch (error) {
        next(error);
    }
};
const deleteproduct = async (req,res,next)=>{
    try {
        const {productId} = req.params;

        const productDelelted = await Product.findByIdAndDelete({_id :productId });

        if(!productDelelted)res.status(400).json({success: true, message:"product already deleted" });

        res.status(200).json({ success : true, message:"product delete successfully",data : productDelelted});
    } catch (error) {
        next(error)
    }
};
const getProduct = async (req, res, next) => {
    try {
        const Products = await Product.find();

        res.status(200).json({ success: true, message: "products fetched", data: Products });
    } catch (error) {
        next(error);
    }
};
const getproductDetails = async (req, res, next) => {
    try {

        const {productId}=req.params;

        const ProductDetails = await Product.findById(productId);

        res.status(200).json({ success: true, message: "product fetched", data: ProductDetails });
    } catch (error) {
        next(error);
    }
};

module.exports = {createproduct,updateproduct,deleteproduct,getProduct,getproductDetails}

