const nodemailer = require('nodemailer');

async function mail(email,msg) {
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        secure: false,
        service: "Gmail",
        port: 25,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD
        },
        tls: {
            rejectUnauthorized: false
        }
    });
    const options = {
        from: "Parvinderkc123@gmail.com",
        to: email,
        subject: "Hello Visitor",
        text:  msg
    };
    let info = await transporter.sendMail(options)
    console.log(info)
    console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}


module.exports = { mail }


