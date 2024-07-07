import userModel from '../models/userModel.js'

//add items to cart
const addtoCart=async(req,res)=>{
    try {
        let userData= await userModel.findById(req.body.userId);
        let cartData= await userData.cart;
        if(!cartData[req.body.itemId]){
         cartData[req.body.itemId] = 1;
        }
        else{
            cartData[req.body.itemId]+=1; 
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cart:cartData});
        res.json({success:true,message:"Added to cart"});
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"error"})
    }
}
//remove items from cart
const removeFromCart=async(req,res)=>{
    try {
        let userData=await userModel.findById(req.body.userId);
        let cartData= await userData.cart
        if(cartData[req.body.itemId]>0){
            cartData[req.body.itemId] -=1;
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cart:cartData})
        res.json({success:true,message:"Item removed from cart"})
        
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
        
}

//fetch items from cart
const getCart=async(req,res)=>{
    try {
        let userData=await userModel.findById(req.body.userId)
        let cartData=await userData.cart;
        res.json({success:true,cartData});
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

export {addtoCart,removeFromCart,getCart}