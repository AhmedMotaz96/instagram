const userModel =require("../../../DB/model/User");
const sendEmail = require("../../../service/sendEmail");
const jwt =require('jsonwebtoken')


const signup =async (req,res)=>{
    try {
        const {userName ,password,email,age,gender}=req.body
    const newUser=new userModel({userName ,password,email,age,gender});
    const savedUser =await newUser.save();
    const token = jwt.sign({id:savedUser._id},process.env.emailTokenSecreat,{expiresIn:5*60})
    const URL =`${req.protocol}://${req.headers.host}/api/v1/auth/confirmEmail/${token}`
    const message =`<a href=${URL}>plz follow me to confirm u email</a>`
    await sendEmail(savedUser.email,)
    res.status(201).json({message:"Done"})
    } catch (err) {
        if (err.keyValue?.email) {
            res.status(404).json({message:"email exist"})
        } else {
            res.status(500).json({message:"catch error",err})
        }
    
    }
    


}

module.exports ={
    signup
}