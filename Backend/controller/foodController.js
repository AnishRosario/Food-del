import foodModel from "../models/foodModel.js";
import fs from 'fs'

//to add an food item
const addFood=async(req,res)=>{
    let image_filename=`${req.file.filename}`;

    const food=new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })
    try{
        food.save();
        res.json({success:true,message:"Food Added"})
    }catch(error){
        console.log(error)
        res.json({success:true,message:'error'})
    }
}

//list the fooditems
const listFood=async(req,res)=>{
    try{
        const food=await foodModel.find({});
        res.json({success:true,data:food})
    }catch(error){
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}

//remove food
const removeFood=async(req,res)=>{
    try{
        const food=await foodModel.findById(req.body.id)
        fs.unlink(`uploads/${food.image}`,()=>{})
        await foodModel.findByIdAndDelete(req.body.id)
        res.json({success:true,message:"Food Removed"})
    }catch(error){
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}

export {addFood,listFood,removeFood}