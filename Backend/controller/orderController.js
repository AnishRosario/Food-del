import orderModel from "../models/orderModel.js";
import userModel from '../models/userModel.js';
import stripe from 'stripe'



// payment for frontend
const placeOrder=async(req,res)=>{
    const fronted_url="http://localhost:5173";
    try {
        const newOrder=new orderModel({
            userId:req.body.userId,
            items:req.body.items,
            amount:req.body.amount,
            address:req.body.address
        })
        await newOrder.save()
        await userModel.findByIdAndUpdate(req.body.userId,{cart:{}})
        const line_items=req.body.items.map((item)=>({
            price_data:{
                currency:"inr",
                product_data:{
                    name:item.name
                },
                unit_amount:item.price*100*80
            },
            quantity:item.quantity
        }))
        line_items.push({
            price_data:{
                currency:"inr",
                product_data:{
                    name:"Delivery Charges"
                },
                unit_amount:2*100*80
            },
            quantity:1
        })
        const session=await stripe.Checkout.sessions.create({
            line_items:line_items,
            mode:"payment",
            success_url:`${fronted_url}/verify?success=true&orderId=${newOrderId}`,
            cancel_url:`${fronted_url}/verify?success=false&orderId=${newOrderId}`
        })
        res.json({success:true,session_url:session.url})
    } catch (error) {
        
    }
    
}
export {placeOrder}