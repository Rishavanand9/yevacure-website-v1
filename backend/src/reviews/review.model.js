const { Schema, model } = require("mongoose");

const ReviewSchema = new Schema({
    comment: { type: String, required: true },
    rating: { type: Number, required: true },
    userId: { type: Schema.type.ObjectId, ref: "User", required: true },
    productId: { type: Schema.type.ObjectId, ref: "Product", required: true },
}, {timestamps: true})

const Reviews = new model("Review", ReviewSchema);

module.exports = Reviews;