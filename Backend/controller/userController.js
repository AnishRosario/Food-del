import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import validator from 'validator'


//login user

const login=async(req,res)=>{
    const{email,password}=req.body;
    try {
        const user=await userModel.findOne({email})
        if(!user){
            return res.json({success:false,message:"user does not exist"})
        }
        const isMatch=await bcrypt.compare(password,user.password)
        if(!isMatch){
            return res.json({success:false,message:"Invalid credentials"})
        }
        const token=createtoken(user._id)
        res.json({success:true,token})

    } catch (error) {
        console.log(error);
        res.json({success:false,message:"error"})
    }
}

//create token

const createtoken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)
}

//register user

const register=async(req,res)=>{
    const {name,email,password}=req.body;
    try {
        const exists=await userModel.findOne({email})
        //check existing account
        if(exists){
            return res.json({success:false,message:"email already exists"})
        }
        //valid email & strong password
        if(!validator.isEmail(email)){
            return res.json({success:false,message:"please enter valid email address"})
        }
        if(password.length<8){
            return res.json({success:false,message:"please enter an strong password"})
        }

        //hasing user password
        const salt=await bcrypt.genSalt(10);
        const hashedpassword= await bcrypt.hash(password,salt)

        const newuser=userModel({
            name:name,
            email:email,
            password:hashedpassword
        })
        const user=await newuser.save()
        const token=createtoken(user._id)
        res.json({success:true,token});

    } catch (error) {
        console.log(error)
        res.json({success:false,message:"error"})
    }
}

export {login,register}