const nodemailer =require('nodemailer');

async function sendEmail(dest , message){
    let transporter = nodemailer.createTransport({
        service:'gmail',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: process.env.senderEmail, // generated ethereal user
          pass: process.env.senderPassword, // generated ethereal password
        },
    });
    
      // send mail with defined transport object
    await transporter.sendMail({
        from: `"Fred Foo 👻" <${process.env.senderEmail}>`, // sender address
        to: dest, // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: message, // html body
    });
}
module.exports= sendEmail