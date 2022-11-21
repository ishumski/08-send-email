const nodemailer = require("nodemailer");




const sendEmail = async (req, res) => {
    let testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'ian.kling@ethereal.email',
            pass: 'A1Dxch3b13KgSqERsv'
        }
    })

    let info = await transporter.sendMail({
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: "bar@example.com, baz@example.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello", // plain text body
        html: "<b>Send email Nodejs</b>", // html body
    });

    res.send(info)
}

module.exports = sendEmail