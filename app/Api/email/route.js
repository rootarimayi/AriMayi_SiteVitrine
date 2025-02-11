import { NextResponse } from 'next/server';
import nodemailer from "nodemailer";


const SMTP_SERVER_HOST = process.env.SMTP_SERVER_HOST;
const SMTP_SERVER_USERNAME = process.env.SMTP_SERVER_USERNAME;
const SMTP_SERVER_PASSWORD = process.env.SMTP_SERVER_PASSWORD;
const SITE_MAIL_RECIEVER = process.env.SITE_MAIL_RECIEVER;

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: SMTP_SERVER_HOST,
  port: 587,
  secure: true,
  auth: {
    user: SMTP_SERVER_USERNAME,
    pass: SMTP_SERVER_PASSWORD,
  },
});

export async function sendMail(options) {
  const { email, sendTo, subject, text, html } = options;
  
  try {
    const isVerified = await transporter.verify();
  } catch (error) {
    console.error('Something Went Wrong', SMTP_SERVER_USERNAME, SMTP_SERVER_PASSWORD, error);
    return;
  }

  const info = await transporter.sendMail({
    from: email,
    to: sendTo || SITE_MAIL_RECIEVER,
    subject: subject,
    text: text,
    html: html ? html : '',
  });

  console.log('Message Sent', info.messageId);
  console.log('Mail sent to', SITE_MAIL_RECIEVER);
  return info;
}

// export default async function handler(req, res) {
//     if (req.method !== "POST") {
//         return res.status(405).json({ error: "Méthode non autorisée" });
//     }

//     console.log("-- sendEmail --");

//     const { email, name, message } = req.body;

//     if (!email || !name || !message) {
//         return res.status(400).json({ error: "Tous les champs sont obligatoires" });
//     }

//     const transporter = nodemailer.createTransport({
//         service: "gmail",
//         auth: {
//             user: process.env.EMAIL_USERNAME,
//             pass: process.env.EMAIL_PASSWORD, 
//         },
//     });

//     try {
//         await transporter.verify();
//         console.log("Connexion SMTP réussie");

//         const info = await transporter.sendMail({
//             from: `${name} <${email}>`,
//             to: process.env.EMAIL_USERNAME,
//             subject: "Contact Form Submission",
//             html: `<p><b>Name:</b> ${name}</p>
//                    <p><b>Email:</b> ${email}</p>
//                    <p><b>Message:</b> ${message}</p>`,
//         });

//         console.log("Email envoyé: " + info.response);

//         return res.status(200).json({ status: "success" });
//     } catch (error) {
//         console.error("Erreur lors de l'envoi de l'email:", error);
//         return res.status(500).json({ error: "Erreur lors de l'envoi de l'email" });
//     }
// }
