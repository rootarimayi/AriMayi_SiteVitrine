// import { Resend } from "./resend";


// export const resend = new Resend(process.env.RESEND_API_KEY);


// const sendEmailApprenant = async () => {
//   const emailContent =
//     "Bonjour, vous avez une demande via le formulaire de contact. message: ${message}";

//   try {
//     await resend.sendEmail({
//       from: "nouhaila.chan2001@gmail.com",
//       to: "Apprenants@arimayi.fr",
//       subject: "Demande de formation",
//       html: emailContent,
//     });
//   } catch (error) {
//     console.error("Error sending email:", error);
//     throw new Error(
//       "Une erreur est survenue lors de l'envoi de votre message."
//     );
//   }
// };

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     try {
//       const { nom, prenom, email, telephone, message, accept } = req.body;

//       // Validate the required fields
//       if (!nom || !prenom || !email || !telephone || !message || !accept) {
//         return res.status(400).json({ error: "Tous les champs sont requis." });
//       }

//       // Send email to apprenant
//       await sendEmailApprenant(prenom);

     
//       res
//         .status(200)
//         .json({
//           message: `votre message a été envoyé avec succès.`,
//         });
//     } catch (error) {
//       console.error("Error:", error);
//       res
//         .status(500)
//         .json({
//           error: "Une erreur est survenue lors de l'envoi de votre message.",
//         });
//     }
//   } else {
   
//     res.setHeader("Allow", ["POST"]);
//     res.status(405).json({ error: `Méthode ${req.method} non autorisée.` });
//   }
// }

// Email template function
// const createEmailContent = (formData) => {
//     const { nom, prenom, email, telephone, message } = formData;
//     return `
//       <h2>Nouvelle demande de contact</h2>
//       <p><strong>Nom:</strong> ${nom}</p>
//       <p><strong>Prénom:</strong> ${prenom}</p>
//       <p><strong>Email:</strong> ${email}</p>
//       <p><strong>Téléphone:</strong> ${telephone}</p>
//       <p><strong>Message:</strong></p>
//       <p>${message}</p>
//     `;
//   };
  
//   // Email sending function
//   const sendEmailNotification = async (formData) => {
//     try {
//       await resend.emails.send({
//         from: 'contact@arimayi.fr', // Utilisez votre domaine vérifié
//         to: 'Apprenants@arimayi.fr',
//         subject: `Nouvelle demande de contact de ${formData.prenom} ${formData.nom}`,
//         html: createEmailContent(formData),
//         reply_to: formData.email // Pour pouvoir répondre directement au contact
//       });
//     } catch (error) {
//       console.error("Erreur d'envoi d'email:", error);
//       throw new Error("Une erreur est survenue lors de l'envoi de l'email.");
//     }
//   };
  
//   export default async function handler(req, res) {
//     // Vérifier la méthode HTTP
//     if (req.method !== 'POST') {
//       return res.status(405).json({ 
//         error: `Méthode ${req.method} non autorisée.` 
//       });
//     }
  
//     try {
//       const formData = req.body;
//       const { nom, prenom, email, telephone, message, accept } = formData;
  
//       // Validation des champs
//       if (!nom || !prenom || !email || !telephone || !message || !accept) {
//         return res.status(400).json({ 
//           error: "Tous les champs sont requis." 
//         });
//       }
  
//       // Validation basique de l'email
//       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//       if (!emailRegex.test(email)) {
//         return res.status(400).json({ 
//           error: "L'adresse email n'est pas valide." 
//         });
//       }
  
//       // Validation basique du numéro de téléphone
//       const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
//       if (!phoneRegex.test(telephone)) {
//         return res.status(400).json({ 
//           error: "Le numéro de téléphone n'est pas valide." 
//         });
//       }
  
//       // Envoi de l'email
//       await sendEmailNotification(formData);
  
//       // Réponse de succès
//       return res.status(200).json({
//         message: "Votre message a été envoyé avec succès."
//       });
  
//     } catch (error) {
//       console.error("Erreur:", error);
//       return res.status(500).json({
//         error: "Une erreur est survenue lors de l'envoi de votre message."
//       });
//     }
//   }