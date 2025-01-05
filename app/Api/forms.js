import { Resend } from "./resend";


export const resend = new Resend(process.env.RESEND_API_KEY);


const sendEmailApprenant = async () => {
  const emailContent =
    "Bonjour, vous avez une demande via le formulaire de contact. message: ${message}";

  try {
    await resend.sendEmail({
      from: "nouhaila.chan2001@gmail.com",
      to: "Apprenants@arimayi.fr",
      subject: "Demande de formation",
      html: emailContent,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error(
      "Une erreur est survenue lors de l'envoi de votre message."
    );
  }
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { nom, prenom, email, telephone, message, accept } = req.body;

      // Validate the required fields
      if (!nom || !prenom || !email || !telephone || !message || !accept) {
        return res.status(400).json({ error: "Tous les champs sont requis." });
      }

      // Send email to apprenant
      await sendEmailApprenant(prenom);

     
      res
        .status(200)
        .json({
          message: `votre message a été envoyé avec succès.`,
        });
    } catch (error) {
      console.error("Error:", error);
      res
        .status(500)
        .json({
          error: "Une erreur est survenue lors de l'envoi de votre message.",
        });
    }
  } else {
   
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ error: `Méthode ${req.method} non autorisée.` });
  }
}
