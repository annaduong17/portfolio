require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3434;

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Credentials', true);
  next();
});

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'aduong9417@gmail.com',
    pass: process.env.EMAIL_PASSWORD
  }
});

app.post('/api/submit-form', (req, res) => {
  const { name, email, message } = req.body;
  
  const mailOptions = {
    from: 'aduong9417@gmail.com',
    to: 'aduong9417@gmail.com',
    subject: 'Portfolio Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }

    res.status(201).send('Form submitted successfully!');
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
