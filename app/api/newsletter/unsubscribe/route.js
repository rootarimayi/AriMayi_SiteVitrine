import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const token = searchParams.get('token');

    const subscriber = await prisma.subscriber.findUnique({
      where: { token }
    });

    if (!subscriber) {
      return new Response('Token invalide', { status: 400 });
    }

    // Delete subscriber
    await prisma.subscriber.delete({
      where: { token }
    });

    const transporter = nodemailer.createTransport({
      host: 'ssl0.ovh.net',
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_SERVER_USERNAME,
        pass: process.env.SMTP_SERVER_PASSWORD,
      },
    });

    // Alert to admin
    await transporter.sendMail({
      from: 'newsletter@arimayi.fr',
      to: process.env.NEWSLETTER_MAIL_RECEIVER,
      subject: 'Désabonnement newsletter',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eaeaea; padding: 20px; border-radius: 8px; background-color: #ffffff;">
          <div style="text-align: center; padding-bottom: 15px; border-bottom: 2px solid #f2f2f2;">
            <h1 style="color: #B163FF; font-size: 22px; margin: 0;">📩 Désabonnement de la newsletter</h1>
            <p style="color: #666; font-size: 14px; margin-top: 5px;">Un abonné s'est désabonné de notre communauté.</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-radius: 5px;">
            <h2 style="color: #333; font-size: 18px; margin-bottom: 10px;">📌 Détails du désabonnement :</h2>
            <p><strong>📧 Email :</strong> <a href="mailto:${subscriber.email}" style="color: #816CFF;">${subscriber.email}</a></p>
            <p><strong>🕒 Date de désabonnement :</strong> ${new Date().toLocaleString()}</p>
          </div>
          
          <p style="color: #999; font-size: 12px; text-align: center; margin-top: 30px;">
            🚀 Ce message a été généré automatiquement par le système de newsletter.
          </p>
        </div>
      `,
    });

   return NextResponse.redirect(new URL('/newsletter-result?token=0&isSubscribe=false', req.url));
  } catch (error) {
    console.error('Unsubscribe error:', error);
    return new Response('Une erreur est survenue', { status: 500 });
  }
}