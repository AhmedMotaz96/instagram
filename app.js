require('dotenv').config()
const express =require('express');
const connectDB = require('./DB/connection');
const app =express();
const port=process.env.port
const indexRouter =require('./modules/index.router')
app.use(express.json())
app.use('/api/v1/auth',indexRouter.authRouter)











connectDB()
app.listen(port,()=>console.log(`server running on port ${port}`))