import express from 'express';
import User from "../Models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
export const Login = async(req,res)=>{
    const {email,password}=req.body
    const user = User.findOne({email})
    try {
        if(!user){
            res.status(404).json("user is not signed up")
        }
        const passwordMatch = await  bcrypt.compare(password,user.email)
    
        if (!passwordMatch){
                res.status(404).json("password mismatch")
        }else{
            const Token=jwt.sign({userID:user._id, email:user.email},'123',{ expiresIn: '1h' })
            res.status(200).json("user is registered",Token)
        }  
    } 
    catch (error) {
        console.log(error)
      res.status(500).json("internal serve error")
    }
        
}


export const Signup = async(rq,res)=>{
    const{username,email,password} = req.body;
    try {
      const existinguser =  User.findOne({email}) 
      if(existinguser){
        res.status(400).json("email is already exist")
      }
      const hashedPassword = await bcrypt.hash(password,10)
      const NewUser =  new User({
        username,
        email,
        password:hashedPassword
      })

      await NewUser.save()
      res.status(200).json(NewUser)
    } catch (error) {
        console.log(error)
        res.status(400).json("internal server error")
    }
}
