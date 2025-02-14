const express = require("express");
const Products = require("./product.model");
const Reviews = require("../reviews/review.model");
const { raw } = require("body-parser");
const verifyToken = require("../middleware/verifyToken");
const verifyAdmin = require("../middleware/verifyAdmin");
const router = express.Router();

//Post a product
router.post("/create-product", async(req, res) => {
    try{
        const newProduct = new Products({
            ...req.body,
        })
        const savedProduct = await newProduct.save()
        const reviews = await Reviews.find({productId: saveProduct._id});

        if(reviews.length > 0){
            const totalRating = reviews.reduce((acc, review) => acc + reviews.rating, 0);
            const avgRating = totalRating / reviews.length;
            savedProduct.rating = avgRating;
            await savedProduct.save()
        }

        res.status(201).send(savedProduct)
    }catch(err){
        console.error("Error in Creating Product", err)
        res.status(500).send({message : "Error in Creating Product"});
    }
})

//get all products
router.get("/", async(req, res) => {
    try{
        const {category, color, minPrice, maxPrice, page=1, limit=10} = req.query

        let filter = {}
        if(category && category !== "all"){
            filter.category = category;
        }
        if(color && color !== "all"){
            filter.color = color
        }
        if(minPrice && maxPrice){
            const min = parseFloat(minPrice);
            const max = parseFloat(maxPrice)
            if(!isNaN(min) && !isNaN(max)){
                filter.price = {$gte: min, $lte: max}
            }
        }

        const skip = (parseInt(page) - 1) * parseInt(limit);
        const totalProducts = await Products.countDocuments(filter);
        const products = await Products.find(filter)
                                .skip(skip)
                                .limit(parseInt(limit))
                                .populate("autor", "email")
                                .sort({createdAt: -1});

        res.status(200).send({products, totalPages, totalProducts})

    }catch(err){
        console.error("Error in Fetching Product", err)
        res.status(500).send({message : "Error in Fetching Product"}); 
    }
})

//get single products
router.get("/:id", async(req, res) => {
    try{

        const productId = req.params.id;
        const product = await Products.findById(productId).populate("author", "email", "username")
        if(!product) {
            return res.status(404).send({message: "Product not found"})
        }
        const reviews = await Reviews.find({productId}).populate("userId", "username", "email")
        res.send(200).send({product, reviews});

    }catch(err){
        console.error("Error in Fetching Product details", err)
        res.status(500).send({message : "Error in Fetching Product details"}); 
    }
})

//update a product
router.patch("/update-product/:id", verifyToken, verifyAdmin, async(req, res) => {
    try {
        const productId = req.params.id;
        const updateProduct = await Products.findByIdAndUpdate(productId, {...req.body}, {new: true});

        if(!updateProduct){
            return res.status(400).send({message: "Product not found"});
        }

        res.status(200).send({
            message: "Product updated Successfully",
            product: updateProduct
        })

    } catch(err) {
        console.error("Error Updating Product", err);
        res.status(500).send({message: "Failed to update the product"})
    }
})

//delete a product
router.delete("/:id", verifyAdmin, async (req, res) => {
    try{
        const productId = req.params.id;
        const deletedProduct = await Products.findByIdAndDelete(productId);
        if(!deletedProduct){
            return res.status(404).send({message: "Product not found"});
        }
        await Reviews.deleteMany({productId: productId})
        res.status(200).send({message: "Product Deleted successfully"})
    } catch(err){
        console.error("Error Deleting Product", err)
        res.status(500).send({message: "Error in deleting Product"})
    }
})


// get related Products
router.ger("/related/:id", async(req, res) => {
    try{
        const { id } = req.params;
        if(!id){
            return res.status(400).send({message: "Product ID is required found"});
        }
        const product = await Products.findByIdAndDelete(id);
        if(!product){
            return res.status(404).send({message: "Product not found"});
        }

        const titleRegex = new RegExp(
            product.name
            .split(" ")
            .filter(word => word.length > 1)
            .join("|"))

        const relatedProducts = await Products.find({
            _id: {$ne: id},
            $or: [
                {name: {$regex: titleRegex}},
                {category: product.category},
            ]
        });

        res.status(200).send(relatedProducts);

    } catch(err){
        console.error("Error Fetching related Product", err)
        res.status(500).send({message: "Error in fetching related Product"})
    }
})

module.exports = router