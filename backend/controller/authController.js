import User from "../model/userModel.js"
import validator from "validator";
import bcrypt from "bcryptjs"
import genToken from "../config/token.js";


// creating user or signup

export const signUp = async(req, res) => {
    try {
        const {name, email, password, role} = req.body
        let existUser = await User.findOne({email})
        if(existUser){
            return res.status(400).json({message:"User Already Exist"})
        }

        if(!validator.isEmail(email)){
            return req.status(400).json({message:"Enter Valid Email"})
        }

        if(password.length < 8){
            return res.status(400).json({message:"Enter Strong Password"})
        }

        let hashPassword = await bcrypt.hash(password, 10)

        const user = await User.create({
            name,
            email,
            password : hashPassword,
            role,
        })

        let token = await genToken(user._id)
        res.cookie("token", token, {       // we have used the req before now we are using the res to send the response this is the error that we faced while writing the code.
            httpOnly: true,
            secure : false,
            sameSite : "Strict",
            maxAge : 7 * 24 * 60 * 1000  //converted 7 days into millisecond
        })

        return res.status(201).json(user)

    } catch (error) {
        return res.status(500).json({message: `SignUp Error ${error}`})
    }
}


// login

export const login = async (req, res) =>{
    try {
        const {email, password} = req.body

        let user = await User.findOne({email})

        if(!user){
            return res.status(404).json({message: " User Not Found"})
        }

        let isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch){
            return res.status(400).json({message:"Incorrect Password"})
        }

        let token = await genToken(user._id)
        res.cookie("token", token, {
            httpOnly: true,
            secure : false,
            sameSite : "Strict",
            maxAge : 7 * 24 * 60 * 1000  //converted 7 days into millisecond
        })

        return res.status(200).json(user)

    } catch (error) {
        return res.status(500).json({message: `LogIn Error ${error}`})
        
    }
}


// logout

export const logout = async (req, res) => {
    try {
        await res.clearCookie("token")
        return res.status(200).json({message: "Logout Successfully"})
    } catch (error) {
        return res.status(500).json({message: `LogOut Error ${error}`})
    }
}