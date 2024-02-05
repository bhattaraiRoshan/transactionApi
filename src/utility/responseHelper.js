

export const buildSuccessResponse = (res, data, message = "") =>{

    res.json({
        status: "Success",
        data,
        message    
    })

}


export const buildErrorResponse = (res, message= '') =>{

    res.json({
        status: "error",
        message: message || "Something went wrong"
    })
}