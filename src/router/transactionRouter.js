import express from "express";
import { createTransaction, deleteTransaction, getTransactions, updateOneTransaction } from "../Model/transaction/transactionModel.js";
import { buildErrorResponse, buildSuccessResponse } from "../utility/responseHelper.js";
import { userAuth } from "../middleware/authMiddleware.js";

const transactionRouter = express.Router();




transactionRouter.get("/", userAuth, async(req,res) => {


    try {

    

        const result = await getTransactions(req.userId)

        if(!result?._id){
            return buildSuccessResponse(res, result)

        }

        result?.length
        ? buildSuccessResponse(res, result)
        : buildErrorResponse(res, "Cannot fetch transations")
        
    } catch (error) {
        buildErrorResponse(res, error.message )
    }


})


// create transaction Router 
transactionRouter.post("/", userAuth, async(req,res) =>{

    try {

        const transactionObj = {
            ...req.body,
            userId: req.userId
        }
       

        const result = await createTransaction(transactionObj)
        console.log(result);

        result?._id 
        ? buildSuccessResponse(res, result, "Transaction Created Sucessfully")
        : buildErrorResponse(res, "Cannot Create Transaction, Try again Later!")
        
    } catch (error) {
        buildErrorResponse(res, error.message )
    }


})

// update one transaction 

transactionRouter.patch("/", userAuth, async(req, res)=>{

    try {
        
        const { _id} = req.body 

    

        const result = await updateOneTransaction(_id, req.body)

        console.log(result?.acknowledged);

        result?.acknowledged
        ? buildSuccessResponse(res, result, "Transaction Updated Sucessfully")
        : buildErrorResponse(res, "Cannot update Transaction, Try again Later!")
        
    } catch (error) {

        buildErrorResponse(res, error.message )
        
    }


})


transactionRouter.delete("/", userAuth, async(req, res)=>{

    try {

        const {id} = req.body

     
        

        const result = await deleteTransaction(id)
        result?.acknowledged
        ? buildSuccessResponse(res, result, "Transaction Deleted Sucessfully")
        : buildErrorResponse(res, "Cannot delete Transaction, Try again Later!")
        
    } catch (error) {
        buildErrorResponse(res, error.message )
    }
})




export default transactionRouter;