import bcrypt from "bcryptjs";

const salt = 15;
export const encryptPassword = (plainPassword) =>{
    const hashPassword = bcrypt.hashSync(plainPassword, salt)
    return hashPassword;

}


export const comparePassword = (plainPassword, encryptPassword) =>{

    return bcrypt.compareSync(plainPassword, encryptPassword)

}