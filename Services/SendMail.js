const nodemailer = require("nodemailer");

const sendMail = async (email, subject, link) => {
  try {
    let transporter = await nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAILER_USERNAME,
        pass: process.env.MAILER_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.MAILER_USERNAME,
      to: email,
      subject: subject,
      html: link,
    };
    console.log({ mailOptions })
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log("erro", error.message);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  } catch (err) {
    console.log("error in email sending", err.message);
  }
};

module.exports = sendMail;
