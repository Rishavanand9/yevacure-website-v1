const express = require("express");
const { default: Stripe } = require("stripe");
const Orders = require("./order.model");
const router = express.Router();

//create checkout session
router.post("/create-checkout-session", async(req, res) => {
    const {products} = req.body;

    try{
        const lineItems = products.map((product) => ({
            price_data: {
                currency: "inr",
                product_data:{
                    name: product.name,
                    images: [product.image],
                    unit_amout: Math.round(product.price * 100),
                },
                quantity: product.quantity,
            }
        }))

        const session = await Stripe.Checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: lineItems,
            mode: 'payments',
            success_url: `${YOUR_DOAIN}/success?session_id=${SESSION_ID}`,
            cancel_url: `${YOUR_DOAIN}/cancel?session_id=${SESSION_ID}`,
        })

        res.json({id: session.id});
    }catch(err){
        console.error("Error in creating checkout session", err);
        res.status(500).send({message: "Failed to create checkout session"})
    }
})

//confirm payment
router.post("/confirm-payment", async(req, res) => {
    const {session_id}= req.body;
    try{
        const session = await Stripe.Checkout.sessions.retrieve(session_id, {
            expand: ["line_items", "payment_intent"]
        })
        const paymentIntentId = session.payment_intent.id;
        let order = await Orders.findOne({orderId: paymentIntentId});

        if(!order){
            const lineItems = session.line_items.data.map((item) => ({
                productId: item.price.product,
                quantity: item.quantity
            }));

            const amount = session.amount_total / 100;
            order = new Orders({
                orderId: paymentIntentId,
                amount,
                products: lineItems,
                email: session.customer_details.email,
                status: session.payment_intent.status === "succeeded" ? "pending" : "failed"
            })
        } else { 
            order.status = session.payment_intent.status === "succeeded" ? "pending" : "failed";
        }

        await order.save();
        res.json({order});

    }catch(err){
        console.error("Error COnfirming payments", err);
        res.status(500).json({error: "Failed to confirm payments"})
    }
})


module.exports = router