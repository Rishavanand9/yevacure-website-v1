const express = require("express");
const Reviews = require("../reviews/review.model");
const Products = require("../products/product.model");
const router = express.Router();

//post a new review 
router.post("/post-review", async(req, res) => {
    try{
        const {comment, rating, productId, userId} = req.body;

        if(!comment || !rating || !productId || !userId) {
            return res.status(400).send({message: "All fields are required"});
        }
        const existingReview = await Reviews.findOne({productId, userId});

        if(existingReview){
            existingReview.comment = comment;
            existingReview.rating = rating;
            await existingReview.save() 
        }else {
            const newReview = new Reviews({
                comment, rating, productId, userId
            })
            await newReview.save()
        }

        const reviews = await Reviews.find({productId});
        if(reviews.length > 0){
            const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0);
            const avgRating = totalRating / reviews.length;
            const product = await Products.findById(productId);
            if(product) {
                product.rating = avgRating;
                product.save({validateBeforeSave: false});
            } else{
                return res.status(404).send({message: "Product not found", reviews })
            }
        }

        res.status(200).send({message: "Review processed successfully"})

    }catch(err){
        console.error("Error posting review", err);
        res.status(500).send({message: "Failed to post review"})
    }
})

// get all review with count
router.get("/total-reviews", async(req, res) => {
    try{
        const totalReviews = await Reviews.countDocuments({})
        res.send(200).send({totalReviews})
    }catch(err){
        console.error("Error getting total review", err);
        res.status(500).send({ message:  "Error getting total review"})
    }
})

// get all review by userId
router.get("/:userId", async(req, res) => {
    const { userId } = req
    if(!userId){
        return res.status(400).send({ message: "UserId is required" });
    }
    
    try{
        const reviews = await Reviews.find({userId: userId}).sort({createdAt: -1});
        if(reviews.length === 0){
            return res.status(404).send({message: "No reviews found"})
        }

        res.status(200).send({reviews})

    }catch(err){
        console.error("Error getting review by Userid ", err);
        res.status(500).send({ message:  "Error getting treview by Userid" })
    }
})



module.exports = router