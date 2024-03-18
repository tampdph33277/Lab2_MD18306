const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "huy612739@gmail.com", // Địa chỉ email của bạn
        pass: "huyga2k1", // Mật khẩu email của bạn
    },
});

module.exports = transporter;
