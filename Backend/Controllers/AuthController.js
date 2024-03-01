import express from 'express';
import User from "../Models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// import CreateSecretToken from '../Utils/CreateSecretToken.js';

export const Login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "User is not signed up", success: false });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Password mismatch", success: false });
    }

    // const token = CreateSecretToken({id:user._id});
    const token= jwt.sign({id:user._id}, '123', { expiresIn: '1hr' });
    return res.status(200).json({ message: "User is logged in", success: true, user, token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error", success: false });
  }
};


export const Signup = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email }).exec();
    if (existingUser) {
      return res.status(400).json("Email is already in use");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    return res.status(200).json({ message: "User is registered", newUser });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
