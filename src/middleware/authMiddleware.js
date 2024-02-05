import { findUserById } from "../Model/User/userModel.js";
import { buildErrorResponse } from "../utility/responseHelper.js";

export const userAuth = async (req,res, next) =>{

    try {
        // for us this value is userId

        // console.log(req.headers);
        

        const {authorization} = req.headers;
        
      

        const user = await findUserById(authorization)

       
        

        if(user?._id){
            req.userId = user?._id
            next()
            return
        }

        buildErrorResponse(res, "Vivek")
        
    } catch (error) {
        buildErrorResponse(res, "Roshan")
    }

}