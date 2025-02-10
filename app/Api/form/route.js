import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const createEmailContent = (formData) => {
  const { nom, prenom, email, telephone, message } = formData;
  return `
    <h2>Nouvelle demande de contact</h2>
    <p><strong>Nom:</strong> ${nom}</p>
    <p><strong>Prénom:</strong> ${prenom}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Téléphone:</strong> ${telephone}</p>
    <p><strong>Message:</strong></p>
    <p>${message}</p>
  `;
};

const sendEmailNotification = async (formData) => {
  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 's.mohameddhoiffir@gmail.com',
      subject: `Nouvelle demande de contact de ${formData.prenom} ${formData.nom}`,
      html: createEmailContent(formData),
      reply_to: formData.email
    });
  } catch (error) {
    console.error("Erreur d'envoi d'email:", error);
    throw new Error("Une erreur est survenue lors de l'envoi de l'email.");
  }
};

// export async function POST(request) {
//   try {
//     const formData = await request.json();
//     console.log("Données reçues:", formData); 
//     const { nom, prenom, email, telephone, message, accept } = formData;

//     // Validation des champs
//     if (!nom || !prenom || !email || !telephone || !message || !accept) {
//       return NextResponse.json(
//         { error: "Tous les champs sont requis." },
//         { status: 400 }
//       );
//     }

//     // Validation basique de l'email
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       return NextResponse.json(
//         { error: "L'adresse email n'est pas valide." },
//         { status: 400 }
//       );
//     }

//     // Validation améliorée du numéro de téléphone
//     // Accepte les formats:
//     // - 06XXXXXXXX ou 07XXXXXXXX
//     // - 06 XX XX XX XX ou 07 XX XX XX XX
//     // - +33 6XXXXXXXX ou +33 7XXXXXXXX
//     // - +336XXXXXXXX ou +337XXXXXXXX
//     // - 00336XXXXXXXX ou 00337XXXXXXXX
//     const phoneRegex = /^(?:(?:\+|00)33|0)\s*[67](?:[\s.-]*\d{2}){4}$/;
    
//     // Nettoyer le numéro de téléphone (enlever les espaces, points, tirets)
//     const cleanPhone = telephone.replace(/[\s.-]/g, '');
    
//     if (!phoneRegex.test(cleanPhone)) {
//       return NextResponse.json(
//         { error: "Le numéro de téléphone n'est pas valide. Utilisez un format français (06/07 XX XX XX XX)." },
//         { status: 400 }
//       );
//     }

//     // Envoi de l'email
//     await sendEmailNotification(formData);

//     return NextResponse.json(
//       { message: "Votre message a été envoyé avec succès." },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("Erreur:", error);
//     return NextResponse.json(
//       { error: "Une erreur est survenue lors de l'envoi de votre message." },
//       { status: 500 }
//     );
//   }
// }
export async function POST(request) {
    try {
      const rawBody = await request.text();
      console.log("Raw Body:", rawBody); //Check if empty
  
      const formData = JSON.parse(rawBody); //Convert JSON manually
      console.log("Données reçues après parsing:", formData); 
  
      const { nom, prenom, email, telephone, message, accept } = formData;
  
      // Vérification des champs
      if (!nom || !prenom || !email || !telephone || !message || !accept) {
        return NextResponse.json(
          { error: "Tous les champs sont requis." },
          { status: 400 }
        );
      }
  
      // Vérification de l'email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return NextResponse.json(
          { error: "L'adresse email n'est pas valide." },
          { status: 400 }
        );
      }
  
      // Vérification du téléphone (format français)
      const phoneRegex = /^(?:(?:\+|00)33|0)\s*[67](?:[\s.-]*\d{2}){4}$/;
      const cleanPhone = telephone.replace(/[\s.-]/g, '');
      
      if (!phoneRegex.test(cleanPhone)) {
        return NextResponse.json(
          { error: "Le numéro de téléphone n'est pas valide. Utilisez un format français (06/07 XX XX XX XX)." },
          { status: 400 }
        );
      }
  
      // Envoi de l'email
      await sendEmailNotification(formData);
  
      return NextResponse.json(
        { message: "Votre message a été envoyé avec succès." },
        { status: 200 }
      );
    } catch (error) {
      console.error("Erreur:", error);
      return NextResponse.json(
        { error: "Une erreur est survenue lors de l'envoi de votre message." },
        { status: 500 }
      );
    }
  }
  

export async function GET() {
    return NextResponse.json(
      { message: "Utilisez une requête POST pour soumettre le formulaire." },
      { status: 200 }
    );
  }
  