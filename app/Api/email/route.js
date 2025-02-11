import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    // Récupérer les données du body
    const { email, name, message } = await request.json();

    const contactEmail = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_SERVER_USERNAME,
        pass: process.env.SMTP_SERVER_PASSWORD,
      },
    });

    // Vérifier la configuration
    await new Promise((resolve, reject) => {
      contactEmail.verify((error) => {
        if (error) {
          console.log(error);
          reject(error);
        } else {
          console.log("Ready to Send");
          resolve();
        }
      });
    });

    const mailOptions = {
      from: `${name} <${email}>`,
      to: process.env.SMTP_SERVER_USERNAME,
      subject: "Contact Form Submission",
      html: `<p><b>Name:</b> ${name}</p>
             <p><b>Email:</b> ${email}</p>
             <p><b>Message:</b> ${message}</p>`,
    };

    console.log(mailOptions);

    // Envoyer l'email
    await new Promise((resolve, reject) => {
      contactEmail.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
          reject(error);
        } else {
          console.log("Email sent: " + info.response);
          resolve(info);
        }
      });
    });

    return NextResponse.json(
      { status: "success" },
      { status: 200 }
    );

  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}