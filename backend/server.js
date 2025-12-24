const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Localhost ke liye CORS configuration
app.use(cors({
  origin: "http://localhost:3000", // React ka default port
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

app.get("/", (req, res) => res.send("Backend Localhost par chal raha hai! 🚀"));

app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.RECEIVER_EMAIL,
    subject: `Portfolio Message from ${name}`,
    text: `Sender: ${name} (${email})\n\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      console.log("Error:", error);
      return res.status(500).json(error);
    }
    res.status(200).json({ message: "Sent Successfully" });
  });
});

const PORT = 5000; // Localhost port
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));