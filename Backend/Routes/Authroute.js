import express from "express";
import {Login,Signup} from '../Controllers/AuthController.js'
const router = express.Router();

router.post('/login', Login)
router.post('/signup' , Signup)


export default router;
