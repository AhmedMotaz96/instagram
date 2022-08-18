const router =require('express').Router();
const controller =require("./controller/registration")

router.post('/signup',controller.signup)








module.exports = router