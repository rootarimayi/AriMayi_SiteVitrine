import { NextResponse } from 'next/server';
import nodemailer from "nodemailer";
import crypto from 'crypto';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


export async function POST(req) {

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
    
    try {
        const { email } = await req.json();

        // Check existing user
        const existingSubscriber = await prisma.subscriber.findUnique({
            where: { email },
        });

        if (existingSubscriber) {
            return Response.json(
                { error: 'Cet email est déjà inscrit' },
                { status: 400 }
            );
        }

        // Add new subscriber with token unique
        const subscriber = await prisma.subscriber.create({
            data: {
                email,
                token: crypto.randomUUID(),
            },
        });

        // Confirmation subscription message e-mail
        await transporter.sendMail({
            from: 'newsletter@arimayi.fr',
            to: email,
            subject: "Bienvenue dans la fourmilière AriMayi 🐜",
            html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eaeaea; padding: 20px; border-radius: 8px; background-color: #ffffff;">
                <div style="text-align: center; padding-bottom: 15px; border-bottom: 2px solid #f2f2f2;">
                    <h2>Bienvenue dans la fourmilière AriMayi !</h2>
                    <p>Vous venez de rejoindre une communauté où les apprenants, les entrepreneurs en herbe et les bâtisseurs d’avenir avancent ensemble avec audace et persévérance. Comme une fourmilière, AriMayi repose sur la solidarité, l’action et la force du collectif pour permettre à chacun d’aller au bout de ses rêves.</p>
            
                    <h3>💡 Ce que vous trouverez dans notre newsletter :</h3>
                    <ul style="list-style: none; padding-left: 0;">
                        <li style="margin: 10px 0;">✔️ Des ressources et conseils pour développer vos compétences, que vous soyez en apprentissage ou en plein lancement de projet.</li>
                        <li style="margin: 10px 0;">✔️ Des opportunités et mises en relation pour apprendre, entreprendre et bâtir un avenir qui vous ressemble.</li>
                        <li style="margin: 10px 0;">✔️ Les coulisses de la fourmilière AriMayi, avec nos initiatives solidaires et nos engagements pour une réussite accessible à tous.</li>
                        <li style="margin: 10px 0;">✔️ Des témoignages inspirants de celles et ceux qui osent, construisent et tracent leur propre chemin.</li>
                    </ul>
            
                    <p>Dans la fourmilière AriMayi, chaque action compte et ensemble, nous pouvons soulever des montagnes 💪 !</p>
            
                    <p>Nous avons hâte de partager cette belle aventure avec vous. En attendant, suivez-nous sur <a href="[remplacer par vos vrais liens]" style="color: black;">nos réseaux sociaux</a> et échangeons ensemble !</p>
            
                    <p>À très bientôt dans la fourmilière 🚀 🐜</p>
                    <p>L'équipe AriMayi</p>
                    <p>Sur LinkedIn : <a href="https://www.linkedin.com/company/arimayi/" style="color: black;">LinkedIn</a><br />
                    Sur Instagram : <a href="https://www.instagram.com/arimayi___" style="color: black;">Instagram</a><br />
                    Sur TikTok : <a href="https://www.tiktok.com/@arimayi_" style="color: black;">TikTok</a></p>
            
                    <p style="font-size: 10px;">Pour vous désabonner, <a href="${process.env.NEXT_PUBLIC_BASE_URL}/newsletter-result?token=${subscriber.token}&isSubscribed=true" style="color: black;">cliquez ici</a>.</p>
                </div>
            </div>
            `,
        });

        // Alert new subscriber to admin
        await transporter.sendMail({
            from: 'newsletter@arimayi.fr',
            to: process.env.NEWSLETTER_MAIL_RECEIVER,
            subject: 'Nouvel abonné à la newsletter',
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eaeaea; padding: 20px; border-radius: 8px; background-color: #ffffff;">
                <div style="text-align: center; padding-bottom: 15px; border-bottom: 2px solid #f2f2f2;">
                  <h1 style="color: #B163FF; font-size: 22px; margin: 0;">📩 Nouvel abonné à la newsletter !</h1>
                  <p style="color: #666; font-size: 14px; margin-top: 5px;">Un nouvel abonné vient de rejoindre notre fourmilière 🎉</p>
                </div>
                
                <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-radius: 5px;">
                  <h2 style="color: #333; font-size: 18px; margin-bottom: 10px;">📌 Détails de l'abonnement :</h2>
                  <p><strong>📧 Email :</strong> <a href="mailto:${email}" style="color: #816CFF;">${email}</a></p>
                  <p><strong>🕒 Date d'inscription :</strong> ${new Date().toLocaleString()}</p>
                </div>
                
                <p style="color: #999; font-size: 12px; text-align: center; margin-top: 30px;">
                  🚀 Ce message a été généré automatiquement par le système de newsletter.
                </p>
              </div>
            `,
        });

        return Response.json({ success: true });
    } catch (error) {
        console.error('Newsletter subscription error:', error);
        return Response.json(
            { error: 'Une erreur est survenue' },
            { status: 500 }
        );
    }
}