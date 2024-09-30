const { cloudinaryInstance } = require("../config/cloudinary Config");

const handleImageUpload = async(path)=>{
    try {
        const uploderResult = await cloudinaryInstance.uploader.upload(path);
        return uploderResult.url;
        
    } catch (error) {
        next (error)
        
    }
};


module.exports ={handleImageUpload}