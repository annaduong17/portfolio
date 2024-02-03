require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3434;

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://www.anna-duong.com');
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

app.post('/api/submit-form', async (req, res) => {
  const { name, email, message, token } = req.body;

  const recaptchaSecretKey = process.env.REACT_APP_SECRET_KEY;
  const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?${recaptchaSecretKey}&response=${token}`;

  try {

    const recaptchaResponse = await axios.post(
      verificationUrl, 
      new URLSearchParams({
      secret: recaptchaSecretKey,
      response: token,
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );
  
    const recaptchaData = await recaptchaResponse.data;

    if (recaptchaData.success) {
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
    
        res.status(201);
      });
    } else {
      console.error('reCAPTCHA verification failed');
      res.status(400).json({ success: false, message: 'reCAPTCHA verification failed' });
    } 
  } catch (error) {
    console.error('Error verifying reCAPTCHA token', error.message);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
