const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors({
  origin: "http://localhost:3000",
  methods: ["GET", "POST"]
}));

app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.log("❌ Transporter Connection Error:", error);
  } else {
    console.log("✅ Server is ready to send emails!");
  }
});

app.get("/", (req, res) => res.send("Backend Localhost par chal raha hai! 🚀"));

app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.RECEIVER_EMAIL,
    subject: `Portfolio Message from ${name}`,
    text: `Sender: ${name} (${email})\n\nMessage: ${message}`,
  };


  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("❌ Email Sending Error:", error); 
      return res.status(500).json({ 
        message: "Email sending failed", 
        details: error.message 
      });
    }
    console.log("📧 Email sent successfully:", info.response);
    res.status(200).json({ message: "Sent Successfully" });
  });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));