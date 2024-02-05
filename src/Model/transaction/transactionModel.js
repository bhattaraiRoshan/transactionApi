import transactionSchema from "./transactionSchema.js";

// create 

export const createTransaction = (transObj) =>{
    return transactionSchema(transObj).save();
}

// get all transaction logged in user

export const getTransactions = (userId) =>{
    return transactionSchema.find({userId})
}


// update one user

export const updateOneTransaction = (id, updateData) =>{
    console.log(id, updateData);

    const filter = { "_id" : id}
    return transactionSchema.replaceOne(filter, updateData)
}

// delete user

export const deleteTransaction = (_id) =>{
    return transactionSchema.deleteOne({ "_id" : _id })
}