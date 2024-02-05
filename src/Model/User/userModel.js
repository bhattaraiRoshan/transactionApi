import userSchema from "./userSchema.js";

export const createUser = (userData) =>{

    return userSchema(userData).save();

}

export const findUserByEmail = (email) =>{
    return userSchema.findOne({email: email})
}

// finduser by id

export const findUserById = (id) =>{
    return userSchema.findById(id)
}

