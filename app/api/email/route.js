import { NextResponse } from 'next/server';
import nodemailer from "nodemailer";

// Function to validate form fields
function validateFormData(formData) {
    const { email, message, formType } = formData;

    if (!email || !message || !formType) {
        return "Tous les champs sont requis.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return "L'adresse email n'est pas valide.";
    }

    if (formType === "contact") {
        const { nom, prenom, telephone, accept } = formData;
        if (!nom || !prenom || !telephone || !accept) {
            return "Tous les champs sont requis.";
        }
        const phoneRegex = /^(?:(?:\+|00)33|0)\s*[67](?:[\s.-]*\d{2}){4}$/;
        if (!phoneRegex.test(telephone.replace(/[\s.-]/g, ""))) {
            return "Le numéro de téléphone n'est pas valide.";
        }
    } else if (formType === "partner") {
        const { companyName, phoneNumber, contactPerson, accept } = formData;
        if (!companyName || !phoneNumber || !contactPerson || !accept) {
            return "Tous les champs sont requis.";
        }
        const phoneRegex = /^(?:(?:\+|00)33|0)\s*[67](?:[\s.-]*\d{2}){4}$/;
        if (!phoneRegex.test(phoneNumber.replace(/[\s.-]/g, ""))) {
            return "Le numéro de téléphone n'est pas valide.";
        }
    } else {
        return "Type de formulaire non reconnu.";
    }

    return null; // No error
}

// Function to send e-mail
async function sendEmail(to, subject, htmlContent, senderEmail) {
    const transporter = nodemailer.createTransport({
        host: 'ssl0.ovh.net',
        port: 465,
        secure: true,
        auth: {
            user: process.env.SMTP_SERVER_USERNAME,
            pass: process.env.SMTP_SERVER_PASSWORD,
        },
    });

    await transporter.verify();

    const mailOptions = {
        from: `${senderEmail}`,
        to,
        subject,
        html: htmlContent,
    };

    return transporter.sendMail(mailOptions);
}

export async function POST(request) {
    try {
        const rawBody = await request.text();
        const formData = JSON.parse(rawBody);

        // Submit data
        const validationError = validateFormData(formData);
        if (validationError) {
            return NextResponse.json({ error: validationError }, { status: 400 });
        }

        // Define content e-mail according type form
        const recipientEmail = formData.formType === "partner"
            ? process.env.PARTNER_MAIL_RECEIVER
            : process.env.CONTACT_MAIL_RECEIVER;
        
        const subject = formData.formType === "partner"
            ? "AriMayi Partenaires : NOUVEAU PARTENAIRE POTENTIEL"
            : "AriMayi : NOUVEAU MESSAGE DE CONTACT";

        const htmlContent = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eaeaea; padding: 20px; border-radius: 8px; background-color: #ffffff;">
              <div style="text-align: center; padding-bottom: 15px; border-bottom: 2px solid #f2f2f2;">
                <h1 style="color: #B163FF; font-size: 22px; margin: 0;">
                  📩 Nouveau message reçu !
                </h1>
                <p style="color: #666; font-size: 14px; margin-top: 5px;">
                  ${formData.formType === "partner" ? "Un partenaire potentiel a envoyé un message." : "Un visiteur a envoyé un message."}
                </p>
              </div>
              
              <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-radius: 5px;">
                <h2 style="color: #333; font-size: 18px; margin-bottom: 10px;">📌 Détails de la prise de contact :</h2>
          
                ${formData.formType === "partner" ? `
                  <p><strong>🏢 Entreprise :</strong> ${formData.companyName}</p>
                  <p><strong>👤 Contact :</strong> ${formData.contactPerson}</p>
                  <p><strong>📞 Téléphone :</strong> ${formData.phoneNumber}</p>
                ` : `
                  <p><strong>👤 Nom :</strong> ${formData.nom} ${formData.prenom}</p>
                  <p><strong>📞 Téléphone :</strong> ${formData.telephone}</p>
                `}
                
                <p><strong>📧 Email :</strong> <a href="mailto:${formData.email}" style="color: #816CFF;">${formData.email}</a></p>
                
                <h3 style="color: #666; margin-top: 20px;">💬 Message :</h3>
                <div style="background-color: #ffffff; padding: 15px; border-left: 4px solid #B163FF; font-style: italic;">
                  ${formData.message.replace(/\n/g, '<br>')}
                </div>
              </div>
              
              <p style="color: #999; font-size: 12px; text-align: center; margin-top: 30px;">
                🚀 Ce message a été envoyé via le formulaire de contact du site vitrine.
              </p>
          
            </div>
          `;
          
        // Send e-mail
        await sendEmail(recipientEmail, subject, htmlContent, formData.email);

        return NextResponse.json({ status: "success" }, { status: 200 });
    } catch (error) {
        console.error("Error processing request:", error);
        return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }
}