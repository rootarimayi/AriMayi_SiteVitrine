import { NextResponse } from 'next/server';
import nodemailer from "nodemailer";

// Function to validate form fields
function validateFormData(formData) {
    const email = formData.get("email");
    const message = formData.get("message");
    const formType = formData.get("formType");

    if (!email || !message || !formType) {
        return "L'email et le message sont requis.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return "L'adresse email n'est pas valide.";
    }

    if (formType === "contact") {
        const nom = formData.get("nom");
        const prenom = formData.get("prenom");
        const telephone = formData.get("telephone");
        const accept = formData.get("accept");

        if (!nom || !prenom || !telephone || !accept) {
            return "Le nom, prénom, téléphone et l'acceptation sont requis.";
        }

        const phoneRegex = /^(?:(?:\+|00)33|0)\s*[67](?:[\s.-]*\d{2}){4}$/;
        if (!phoneRegex.test(telephone.replace(/[\s.-]/g, ""))) {
            return "Le numéro de téléphone n'est pas valide.";
        }
    } else if (formType === "partner") {
        const companyName = formData.get("companyName");
        const phoneNumber = formData.get("phoneNumber");
        const contactPerson = formData.get("contactPerson");
        const accept = formData.get("accept");

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

    return null;
}

// Function to send e-mail
async function sendEmail(to, subject, htmlContent, senderEmail, attachments = []) {
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
        from: senderEmail,
        to,
        subject,
        html: htmlContent,
        attachments,
    };

    return transporter.sendMail(mailOptions);
}

export async function POST(req) {
    try {
        const formData = await req.formData();
        console.log("FormData reçu:", formData);

        const validationError = validateFormData(formData);
        if (validationError) {
            return NextResponse.json({ error: validationError }, { status: 400 });
        }

        // Get data form
        const formType = formData.get("formType");

        // Define content e-mail according type form
        const recipientEmail = formData.formType === "partner"
            ? process.env.PARTNER_MAIL_RECEIVER
            : process.env.CONTACT_MAIL_RECEIVER;

        const subject = formType === "partner"
            ? "AriMayi Partenaires : NOUVEAU PARTENAIRE POTENTIEL"
            : "AriMayi : NOUVEAU MESSAGE DE CONTACT";

        // CV handler
        const attachments = [];
        let attachmentInfo = "";
        const cvFile = formData.get("cv");
        if (cvFile instanceof Blob) {
            const buffer = Buffer.from(await cvFile.arrayBuffer());
            attachments.push({
                filename: cvFile.name,
                content: buffer
            });
            attachmentInfo = `<p><strong>📎 CV joint :</strong> Disponible en pièce jointe.</p>`;
        }

        const htmlContent = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eaeaea; padding: 20px; border-radius: 8px; background-color: #ffffff;">
              <div style="text-align: center; padding-bottom: 15px; border-bottom: 2px solid #f2f2f2;">
                <h1 style="color: #B163FF; font-size: 22px; margin: 0;">📩 Nouveau message reçu !</h1>
                <p style="color: #666; font-size: 14px; margin-top: 5px;">
                  ${formType === "partner" ? "Un partenaire potentiel a envoyé un message." : "Un visiteur a envoyé un message."}
                </p>
              </div>
              
              <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-radius: 5px;">
                <h2 style="color: #333; font-size: 18px; margin-bottom: 10px;">📌 Détails de la prise de contact :</h2>
          
                ${formType === "partner" ? `
                  <p><strong>🏢 Entreprise :</strong> ${formData.get("companyName")}</p>
                  <p><strong>👤 Contact :</strong> ${formData.get("contactPerson")}</p>
                  <p><strong>📞 Téléphone :</strong> ${formData.get("phoneNumber")}</p>
                ` : `
                  <p><strong>👤 Nom :</strong> ${formData.get("nom")} ${formData.get("prenom")}</p>
                  <p><strong>📞 Téléphone :</strong> ${formData.get("telephone")}</p>
                `}
                
                <p><strong>📧 Email :</strong> <a href="mailto:${formData.get("email")}" style="color: #816CFF;">${formData.get("email")}</a></p>
                
                <h3 style="color: #666; margin-top: 20px;">💬 Message :</h3>
                <div style="background-color: #ffffff; padding: 15px; border-left: 4px solid #B163FF; font-style: italic;">
                ${formData.get("message") ? formData.get("message").replace(/\n/g, '<br>') : ""}
                </div>
                ${attachmentInfo}
              </div>
              
              <p style="color: #999; font-size: 12px; text-align: center; margin-top: 30px;">
                🚀 Ce message a été envoyé via le formulaire de contact du site vitrine.
              </p>
          
            </div>
          `;

        // Send e-mail
        await sendEmail(recipientEmail, subject, htmlContent, formData.get("email"), attachments);

        return NextResponse.json({ success: "Email envoyé avec succès" }, { status: 200 });
    } catch (error) {
        console.error("Erreur lors de l'envoi de l'email:", error);
        return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
    }
}
