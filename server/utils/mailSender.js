const nodemailer = require("nodemailer")
require("dotenv").config()

const mailSender = async (email, title, body) => {
  try {
    let transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
      secure: false,
    })

    let info = await transporter.sendMail({
      from: `"Studynotion | Anurag " ${process.env.MAIL_USER}` , // sender address
      to: `${email}`, // list of receivers
      subject: `${title}`, // Subject line
      html: `${body}`, // html body
    })
    console.log(info.response)
    return info
  } catch (error) {
    console.log("1",error.message)
    console.log("2",error)
    console.error("3",error)
    console.log("error aaya hai ji otp ke time")
    return error.message
  }
}

module.exports = mailSender
