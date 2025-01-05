import {Resend } from './resend';
export const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmailApprenant = async (email) => {
    await resend.sendEmail({
        from: email,
        to: 'Apprenants@arimayi.fr',
        subject: 'Demande de formation',
        html: 'Bonjour, vous avez une demande de formation en attente. Veuillez consulter votre tableau de bord pour plus de détails.'
    });
};