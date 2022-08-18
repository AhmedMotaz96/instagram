const mongoose =require('mongoose');
const bcrypt =require('bcryptjs');
const userSchema = new mongoose.Schema({
    userName:{type:String,required: true},
    fristName:String,
    lastName:String,
    email:{type:String,required: true,unique:true},
    password:{type:String,required: true},
    age:{type:Number,required: true},
    gender:{type:String,required: true,enum:['Male' ,'Female'],default:'Male'},
    confirmEmail:{type:Boolean,default:false},
    isBlooked:{type:Boolean,default:false},
    online:{type:Boolean,default:false},
    profilePic:{type:String},
    coverPic:{type:Array},
    gallary:{type:Array},
    follwer:[{type:mongoose.Schema.Types.ObjectId,ref:'User'}],
    following:[{type:mongoose.Schema.Types.ObjectId,ref:'User'}],
    role:{type:String,default:'User'},
    socialLink:Array,
    pdflink:String,
    story:Array
},{
    timestamps:true
})
userSchema.pre('save', async function (next){
    this.password= await bcrypt.hash(this.password,parseInt(process.env.saltRound))
    next()
})


const userModel = mongoose.model('User',userSchema)
module.exports=userModel