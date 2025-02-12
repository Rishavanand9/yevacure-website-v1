const express = require("express");
const Products = require("./product.model");
const Reviews = require("../reviews/review.model");
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
        res.status(500).send({message : "Error in Saving Product"});
    }
})

module.exports = router