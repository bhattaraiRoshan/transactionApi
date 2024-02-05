import express from "express";
import { comparePassword, encryptPassword } from "../utility/bcryptHelper.js";
import { createUser, findUserByEmail } from "../Model/User/userModel.js";
import { buildErrorResponse, buildSuccessResponse } from "../utility/responseHelper.js";

const userRouter = express.Router();


// creating the user | userCreation
userRouter.post("/", async (req, res)=>{

    // get password from req

    // to encrypt password

    // create user object from req

    try {

        const { password, name, email } = req.body

        const hashPassword = encryptPassword(password);

        const result = await createUser({
            name: name,
            email: email,
            password: hashPassword,
        })


        // const {name, email, _id} = result

    // don't send the password to frontend 

        result?._id 
        ? buildSuccessResponse(res,
        result, "Users Create Successfully") 
        : buildErrorResponse(res, "Colud not register the user")
        
    } catch (error) {

        if(error.code === 11000){
            error.message = "User with this email already exists!!"
        }

        buildErrorResponse(res, error.message)
        
    }

    

})


// user login 

userRouter.post("/login", async (req, res)=>{
    try {

        const {email, password} = req.body

        // find user by email
        const user = await findUserByEmail(email);


        if(user._id){
            const isMatch = comparePassword(password, user.password)
            return isMatch ?
             buildSuccessResponse(res, user, "Loged in sucessfully")
             : buildErrorResponse(res, "Invalid Credentials")
        }


        buildErrorResponse(res, "Invalid Credentials")



        // comapare
        
    } catch (error) {

        buildErrorResponse(res, "Invalid Credentials")
        
    }


})


export default userRouter;