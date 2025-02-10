import nodemailer from "nodemailer";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Méthode non autorisée" });
    }

    console.log("-- sendEmail --");

    const { email, name, message } = req.body;

    if (!email || !name || !message) {
        return res.status(400).json({ error: "Tous les champs sont obligatoires" });
    }

    // Configuration du transport Nodemailer
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD, // Utiliser un "mot de passe d'application"
        },
    });

    try {
        // Vérification du transport
        await transporter.verify();
        console.log("Connexion SMTP réussie");

        // Envoi de l'email
        const info = await transporter.sendMail({
            from: `${name} <${email}>`,
            to: process.env.EMAIL_USERNAME,
            subject: "Contact Form Submission",
            html: `<p><b>Name:</b> ${name}</p>
                   <p><b>Email:</b> ${email}</p>
                   <p><b>Message:</b> ${message}</p>`,
        });

        console.log("Email envoyé: " + info.response);

        return res.status(200).json({ status: "success" });
    } catch (error) {
        console.error("Erreur lors de l'envoi de l'email:", error);
        return res.status(500).json({ error: "Erreur lors de l'envoi de l'email" });
    }
}
